const fs = require('fs');
const { execSync } = require('child_process');
const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palermo_Cathedral.jpg/800px-Palermo_Cathedral.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cattedrale_di_Palermo.jpg/800px-Cattedrale_di_Palermo.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Palermo_cathedral_front_view.jpg/800px-Palermo_cathedral_front_view.jpg'
];
const outDir = 'public/sectrion6/day3/Palermo-Cathedral';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
urls.forEach((u, i) => {
    const tmp = outDir + '/c_' + i + '.tmp.jpg';
    const out = outDir + '/cathedral_' + (i + 1) + '.webp';
    execSync('curl.exe -s -L -A "Mozilla/5.0" -o "' + tmp + '" "' + u + '"');
    if (fs.existsSync(tmp) && fs.statSync(tmp).size > 1000) {
        execSync('ffmpeg -y -i "' + tmp + '" -c:v libwebp -preset default -q:v 50 -vf "scale=800:-1" "' + out + '"', { stdio: 'ignore' });
        fs.unlinkSync(tmp);
        console.log('Saved', out);
    } else {
        console.log('Failed', u);
    }
});
