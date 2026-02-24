const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targets = [
    { folder: 'Quattro-Canti', prefix: 'quattrocanti', query: 'Quattro Canti', expected: 3 },
    { folder: 'Teatro-Massimo', prefix: 'massimo', query: 'Teatro Massimo', expected: 3 },
    { folder: 'Palermo-Cathedral', prefix: 'cathedral', query: 'Palermo Cathedral', expected: 3 }
];

const headers = { 'User-Agent': 'CruiseScheduleApp/1.0 (contact@example.com)' };

async function fetchWikiImages(query, limit = 10) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&generator=images&titles=${encodeURIComponent(query)}&gimlimit=50&format=json`;
    console.log(`Querying: ${url}`);
    const res = await fetch(url, { headers });
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return [];

    const urls = [];
    for (const key in pages) {
        const page = pages[key];
        if (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
            const imgUrl = page.imageinfo[0].url;
            const lowerUrl = imgUrl.toLowerCase();
            if ((lowerUrl.endsWith('.jpg') || lowerUrl.endsWith('.jpeg') || lowerUrl.endsWith('.png')) &&
                !lowerUrl.includes('icon') && !lowerUrl.includes('logo') && !lowerUrl.includes('map') && !lowerUrl.includes('flag') && !lowerUrl.includes('montage') && !lowerUrl.includes('locator') && !lowerUrl.includes('coa') && !lowerUrl.includes('symbol')) {
                urls.push(imgUrl);
            }
        }
    }
    return urls.slice(0, limit);
}

async function downloadAndConvert(url, outputPath) {
    console.log(`Downloading ${url} -> ${outputPath}`);
    const res = await fetch(url, { headers });
    if (!res.ok) {
        console.error(`Failed to download ${url}: ${res.statusText}`);
        return;
    }
    const buffer = await res.arrayBuffer();
    if (buffer.byteLength < 1000) {
        console.error(`File too small: ${buffer.byteLength} bytes`);
        return;
    }
    const tempPath = outputPath + '.tmp.jpg';
    fs.writeFileSync(tempPath, Buffer.from(buffer));

    try {
        execSync(`ffmpeg -y -i "${tempPath}" -c:v libwebp -preset default -q:v 50 -vf "scale='min(800,iw)':-1" "${outputPath}"`, { stdio: 'ignore' });

        let size = fs.statSync(outputPath).size;
        let q = 40;
        while (size > 100 * 1024 && q >= 10) {
            console.log(`Size is ${(size / 1024).toFixed(1)}KB, recompresing with q=${q}...`);
            execSync(`ffmpeg -y -i "${tempPath}" -c:v libwebp -preset default -q:v ${q} -vf "scale='min(800,iw)':-1" "${outputPath}"`, { stdio: 'ignore' });
            size = fs.statSync(outputPath).size;
            q -= 10;
        }
        console.log(`Saved ${outputPath} at ${(size / 1024).toFixed(1)}KB`);
    } catch (e) {
        console.error("FFmpeg error:", e.message);
    }

    if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
    }
}

async function processTargets() {
    const baseDir = path.join(__dirname, 'public', 'sectrion6', 'day3');

    for (const target of targets) {
        const targetDir = path.join(baseDir, target.folder);
        if (!fs.existsSync(targetDir)) {
            console.log(`Creating dir: ${targetDir}`);
            fs.mkdirSync(targetDir, { recursive: true });
        }

        let allUrls = await fetchWikiImages(target.query, 10);
        allUrls = [...new Set(allUrls)];
        allUrls = allUrls.slice(0, target.expected);

        if (allUrls.length < target.expected) {
            console.warn(`Not enough images found for ${target.query}! Found ${allUrls.length}, expected ${target.expected}`);
        }

        // Clean existing 0 byte files
        const existingFiles = fs.readdirSync(targetDir);
        for (const file of existingFiles) {
            if (file.endsWith('.webp')) {
                const size = fs.statSync(path.join(targetDir, file)).size;
                if (size === 0) fs.unlinkSync(path.join(targetDir, file));
            }
        }

        for (let i = 0; i < allUrls.length; i++) {
            const outputPath = path.join(targetDir, `${target.prefix}_${i + 1}.webp`);
            if (!fs.existsSync(outputPath) || fs.statSync(outputPath).size === 0) {
                await downloadAndConvert(allUrls[i], outputPath);
            } else {
                console.log(`Skipping existing ${outputPath}`);
            }
        }
    }
    console.log('Done!');
}

processTargets().catch(console.error);
