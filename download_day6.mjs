import fs from 'fs';
import path from 'path';
import https from 'https';
import { execFileSync } from 'child_process';

const destDir = "c:\\AI_Project\\cruise-schedule-web-page-western-sea\\public";

const tasks = [
    { query: "Barcelona Spain", relPath: "sectrion6\\day6\\Barcelona", prefix: "barcelona" },
    { query: "Park Guell Barcelona", relPath: "sectrion6\\day6\\Park-Guell", prefix: "parkguell" },
    { query: "Sagrada Familia", relPath: "sectrion6\\day6\\Sagrada-Familia", prefix: "sagrada" },
    { query: "Casa Batllo Barcelona", relPath: "sectrion6\\day6\\Casa-Batllo", prefix: "casabatllo" },
    { query: "Casa Mila Barcelona", relPath: "sectrion6\\day6\\Casa-Mila", prefix: "casamila" }
];

async function getUnsplashImages(query, count) {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const results = parsed.results || [];
                    const landscape = results.filter(r => r.width > r.height).map(r => r.urls.regular);
                    if (landscape.length >= count) {
                        resolve(landscape.slice(0, count));
                    } else {
                        resolve(results.map(r => r.urls.regular).slice(0, count));
                    }
                } catch (e) {
                    console.error('Error parsing JSON for ' + query);
                    resolve([]);
                }
            });
        }).on('error', () => resolve([]));
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                downloadImage(res.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    for (const task of tasks) {
        const fullDir = path.join(destDir, task.relPath);
        fs.mkdirSync(fullDir, { recursive: true });
        console.log(`Fetching images for ${task.query}...`);
        const urls = await getUnsplashImages(task.query, 3);
        if (!urls || urls.length === 0) {
            console.log(`No images found for ${task.query}`);
            continue;
        }
        for (let i = 0; i < urls.length; i++) {
            const idx = i + 1;
            const tempImg = path.join(fullDir, `temp_${task.prefix}_${idx}.jpg`);
            const finalImg = path.join(fullDir, `${task.prefix}_${idx}.webp`);
            console.log(`Downloading ${urls[i]} to ${tempImg}`);
            await downloadImage(urls[i], tempImg);
            console.log(`Converting ${tempImg} to ${finalImg} (max 1200px wide, webp < 100kb)...`);
            try {
                execFileSync('ffmpeg', ['-y', '-i', tempImg, '-vf', 'scale=min(1200\\,iw):-1', '-c:v', 'libwebp', '-q:v', '50', finalImg], { stdio: 'ignore' });
                let stats = fs.statSync(finalImg);
                if (stats.size > 100 * 1024) {
                    console.log(`Size too big (${Math.round(stats.size / 1024)}KB), recompressing...`);
                    execFileSync('ffmpeg', ['-y', '-i', tempImg, '-vf', 'scale=min(800\\,iw):-1', '-c:v', 'libwebp', '-q:v', '30', finalImg], { stdio: 'ignore' });
                }
                stats = fs.statSync(finalImg);
                console.log(`Final size: ${Math.round(stats.size / 1024)}KB`);
                fs.unlinkSync(tempImg);
            } catch (e) {
                console.log(`Error converting ${tempImg}`, e.message);
            }
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Done!');
}

run();
