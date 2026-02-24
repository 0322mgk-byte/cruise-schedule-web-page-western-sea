import os
import urllib.request
import urllib.parse
import json
import subprocess
import time

dest_dir = r"c:\AI_Project\cruise-schedule-web-page-western-sea\public"

# Format: (query, path relative to public, filename prefix)
image_tasks = [
    ("Barcelona Spain", r"sectrion6\day6\Barcelona", "barcelona"),
    ("Park Guell Barcelona", r"sectrion6\day6\Park-Guell", "parkguell"),
    ("Sagrada Familia", r"sectrion6\day6\Sagrada-Familia", "sagrada"),
    ("Casa Batllo Barcelona", r"sectrion6\day6\Casa-Batllo", "casabatllo"),
    ("Casa Mila Barcelona", r"sectrion6\day6\Casa-Mila", "casamila")
]

def get_unsplash_images(query, count=3):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=10"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            results = data.get('results', [])
            landscape_urls = [res['urls']['regular'] for res in results if res['width'] > res['height']]
            if len(landscape_urls) >= count:
                return landscape_urls[:count]
            else:
                return [res['urls']['regular'] for res in results][:count]
    except Exception as e:
        print(f"Error fetching {query}: {e}")
        return []

for query, rel_path, prefix in image_tasks:
    full_dir = os.path.join(dest_dir, rel_path)
    os.makedirs(full_dir, exist_ok=True)
    
    print(f"Fetching images for {query}...")
    urls = get_unsplash_images(query, 3)
    if not urls:
        print(f"Failed to find images for {query}")
        continue
        
    for i, url in enumerate(urls):
        idx = i + 1
        temp_img = os.path.join(full_dir, f"temp_{prefix}_{idx}.jpg")
        final_img = os.path.join(full_dir, f"{prefix}_{idx}.webp")
        
        print(f"Downloading {url} to {temp_img}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(temp_img, 'wb') as out_file:
                out_file.write(response.read())
            
            print(f"Converting {temp_img} to {final_img} (< 100kb)...")
            cmd = [
                'ffmpeg', '-y', '-i', temp_img, 
                '-vf', 'scale=''min(1200,iw)'':-1', 
                '-c:v', 'libwebp', '-q:v', '50', 
                final_img
            ]
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            
            size_kb = os.path.getsize(final_img) / 1024
            if size_kb > 95:
                print(f"Size too big ({size_kb:.1f}KB), recompressing...")
                cmd = [
                    'ffmpeg', '-y', '-i', temp_img, 
                    '-vf', 'scale=''min(800,iw)'':-1', 
                    '-c:v', 'libwebp', '-q:v', '30', 
                    final_img
                ]
                subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                size_kb = os.path.getsize(final_img) / 1024
            print(f"Final size: {size_kb:.1f}KB")
            
            os.remove(temp_img)
        except Exception as e:
            print(f"Error processing {prefix}_{idx}: {e}")
            
    time.sleep(1)
print("Done!")
