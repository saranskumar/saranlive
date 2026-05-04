from PIL import Image
import os

input_path = r"d:\WORK\Portfolio\saranlive\public\systems\airob\DSC05585.png"
output_path = r"d:\WORK\Portfolio\saranlive\public\systems\airob\airob-hero.webp"

try:
    img = Image.open(input_path)
    # Convert to RGB if necessary (though PNG is usually fine, webp likes RGB/RGBA)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
        
    # Resize if too large
    max_width = 1920
    if img.width > max_width:
        w_percent = (max_width / float(img.width))
        h_size = int((float(img.height) * float(w_percent)))
        img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)

    img.save(output_path, "WEBP", quality=80)
    print(f"Successfully compressed and saved to {output_path}")
    print(f"Original size: {os.path.getsize(input_path)} bytes")
    print(f"New size: {os.path.getsize(output_path)} bytes")
except Exception as e:
    print(f"Error: {e}")
