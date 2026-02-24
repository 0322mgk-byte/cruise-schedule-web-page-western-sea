const fs = require('fs');
const { execSync } = require('child_process');

const pages = [
    { name: 'Quattro-Canti', url: 'https://en.wikipedia.org/wiki/Quattro_Canti', prefix: 'quattrocanti' },
    { name: 'Teatro-Massimo', url: 'https://en.wikipedia.org/wiki/Teatro_Massimo', prefix: 'massimo' },
    { name: 'Palermo-Cathedral', url: 'https://en.wikipedia.org/wiki/Palermo_Cathedral', prefix: 'cathedral' }
];

async function run() {
    for (const p of pages) {
        console.log("Fetching", p.url);
        const html = await (await fetch(p.url)).text();
        const regex = /<img[^>]+src="([^">]+\.jpg)"/gi;
        let match;
        const urls = [];
        while ((match = regex.exec(html)) !== null) {
            let u = match[1];
            if (u.startsWith('//')) u = 'https:' + u;

            // If it's a wikipedia thumb, upgrade it to 800px instead of whatever small size it is
            // Example: .../thumb/1/1a/File.jpg/220px-File.jpg -> .../thumb/1/1a/File.jpg/800px-File.jpg
            if (u.includes('/thumb/')) {
                u = u.replace(/\/\d+px-/, '/800px-');
            }

            const lower = u.toLowerCase();
            if (!urls.includes(u) && !lower.includes('map') && !lower.includes('icon') && !lower.includes('logo') && !lower.includes('locator')) {
                urls.push(u);
            }
        }

        // Create dir if needed
        const dir = `public/sectrion6/day3/${p.name}`;
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        let successCount = 0;
        for (let i = 0; i < urls.length && successCount < 3; i++) {
            const u = urls[i];
            const out = `${dir}/${p.prefix}_${successCount + 1}.webp`;
            const temp = out + '.tmp.jpg';
            try {
                console.log(`Downloading ${u} -> ${out}`);
                execSync(`curl.exe -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -o "${temp}" "${u}"`);
                if (fs.existsSync(temp)) {
                    const size = fs.statSync(temp).size;
                    if (size > 1000) { // Valid file
                        // Compress to < 100kb webp
                        execSync(`ffmpeg -y -i "${temp}" -c:v libwebp -preset default -q:v 50 -vf "scale='min(800,iw)':-1" "${out}"`, { stdio: 'ignore' });
                        let finalSize = fs.statSync(out).size;
                        let q = 40;
                        while (finalSize > 100 * 1024 && q >= 10) {
                            execSync(`ffmpeg -y -i "${temp}" -c:v libwebp -preset default -q:v ${q} -vf "scale='min(800,iw)':-1" "${out}"`, { stdio: 'ignore' });
                            finalSize = fs.statSync(out).size;
                            q -= 10;
                        }
                        fs.unlinkSync(temp);
                        console.log(`Saved ${out} size: ${(finalSize / 1024).toFixed(1)}KB`);
                        successCount++;
                    } else {
                        fs.unlinkSync(temp);
                    }
                }
            } catch (e) {
                console.log("Failed", u, e.message);
            }
        }
    }
}
run();
