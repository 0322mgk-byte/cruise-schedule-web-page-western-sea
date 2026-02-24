const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targets = [
    { folder: 'Quattro-Canti', prefix: 'quattrocanti', query: 'Quattro Canti', expected: 3 },
    { folder: 'Teatro-Massimo', prefix: 'massimo', query: 'Teatro Massimo', expected: 3 },
    { folder: 'Palermo-Cathedral', prefix: 'cathedral', query: 'Palermo Cathedral', expected: 3 }
];

async function fetchWikiImages(query, limit = 10) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&generator=images&titles=${encodeURIComponent(query)}&gimlimit=50&format=json`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
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
    const tempPath = outputPath + '.tmp.jpg';

    try {
        // Use curl to download the file directly, avoiding Node fetch strictness
        execSync(`curl.exe -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36" -o "${tempPath}" "${url}"`, { stdio: 'ignore' });
    } catch (e) {
        console.error(`Curl failed for ${url}: ${e.message}`);
        return;
    }

    if (!fs.existsSync(tempPath) || fs.statSync(tempPath).size < 1000) {
        console.error(`File too small or missing after curl for ${url}`);
        return;
    }

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
            fs.mkdirSync(targetDir, { recursive: true });
        }

        let allUrls = await fetchWikiImages(target.query, 10);
        allUrls = [...new Set(allUrls)];

        // Sort logic to randomize or just pick first 3
        allUrls = allUrls.slice(0, target.expected);

        for (let i = 0; i < allUrls.length; i++) {
            const outputPath = path.join(targetDir, `${target.prefix}_${i + 1}.webp`);
            if (!fs.existsSync(outputPath) || fs.statSync(outputPath).size === 0) {
                await downloadAndConvert(allUrls[i], outputPath);
            }
        }
    }
    console.log('Done!');
}

processTargets().catch(console.error);
