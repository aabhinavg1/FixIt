from collections import deque
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "static" / "img" / "compilersutra-logo-source.jpg"
OUT_DIR = ROOT / "static" / "img"


def rounded_mask(size: int, radius: int) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    return mask


def largest_component(mask: Image.Image) -> Image.Image:
    width, height = mask.size
    pixels = mask.load()
    visited = [[False] * width for _ in range(height)]
    best = []

    for y in range(height):
        for x in range(width):
            if visited[y][x] or pixels[x, y] == 0:
                continue
            queue = deque([(x, y)])
            visited[y][x] = True
            current = []
            while queue:
                cx, cy = queue.popleft()
                current.append((cx, cy))
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx = cx + dx
                    ny = cy + dy
                    if 0 <= nx < width and 0 <= ny < height and not visited[ny][nx] and pixels[nx, ny] != 0:
                        visited[ny][nx] = True
                        queue.append((nx, ny))
            if len(current) > len(best):
                best = current

    out = Image.new("L", mask.size, 0)
    out_pixels = out.load()
    for x, y in best:
        out_pixels[x, y] = 255
    return out


def extract_mark() -> Image.Image:
    src = Image.open(SOURCE).convert("RGBA")
    # Skip the wordmark and keep the hanging mark plus bar.
    crop = src.crop((115, 165, 485, 540))
    mask = crop.convert("L").point(lambda p: 255 if p > 130 else 0)
    mask = mask.filter(ImageFilter.MedianFilter(size=3))
    mask = largest_component(mask)
    bbox = mask.getbbox()
    if bbox is None:
        raise RuntimeError("Could not isolate CompilerSutra logo mark from source image.")
    mark_mask = mask.crop(bbox)
    mark = Image.new("RGBA", mark_mask.size, (246, 247, 251, 0))
    mark.putalpha(mark_mask)
    return mark


def build_icon(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    radius = round(size * 0.24)
    panel_mask = rounded_mask(size, radius)

    # Premium dark base.
    base = Image.new("RGBA", (size, size), (8, 10, 18, 255))
    overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.ellipse(
        (round(size * 0.02), -round(size * 0.08), round(size * 0.82), round(size * 0.56)),
        fill=(30, 42, 70, 170),
    )
    overlay_draw.ellipse(
        (round(size * 0.58), round(size * 0.62), round(size * 1.08), round(size * 1.04)),
        fill=(104, 12, 16, 115),
    )
    base = Image.alpha_composite(base, overlay)
    canvas.paste(base, (0, 0), panel_mask)

    border = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    border_draw = ImageDraw.Draw(border)
    border_draw.rounded_rectangle(
        (round(size * 0.03), round(size * 0.03), round(size * 0.97), round(size * 0.97)),
        radius=round(size * 0.21),
        outline=(255, 82, 82, 215),
        width=max(2, round(size * 0.035)),
    )
    canvas = Image.alpha_composite(canvas, border)

    mark = extract_mark()
    max_w = round(size * 0.66)
    max_h = round(size * 0.66)
    mark.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)

    # Small red accent behind the bar for recognition at tiny sizes.
    accent = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    accent_draw = ImageDraw.Draw(accent)
    y = round(size * 0.28)
    accent_draw.rounded_rectangle(
        (round(size * 0.24), y, round(size * 0.76), y + max(6, round(size * 0.055))),
        radius=max(3, round(size * 0.03)),
        fill=(255, 77, 77, 255),
    )
    accent = accent.filter(ImageFilter.GaussianBlur(radius=max(2, round(size * 0.012))))
    canvas = Image.alpha_composite(canvas, accent)

    shadow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    shadow_mark = Image.new("RGBA", mark.size, (0, 0, 0, 170))
    shadow_alpha = mark.getchannel("A").filter(ImageFilter.GaussianBlur(radius=max(2, round(size * 0.01))))
    shadow_mark.putalpha(shadow_alpha)

    mark_x = (size - mark.width) // 2
    mark_y = round(size * 0.19)
    shadow.paste(shadow_mark, (mark_x, mark_y + max(2, round(size * 0.015))), shadow_mark)
    canvas = Image.alpha_composite(canvas, shadow)
    canvas.paste(mark, (mark_x, mark_y), mark)

    return canvas


def save_png_and_ico() -> None:
    icon_512 = build_icon(512)
    icon_192 = build_icon(192)
    icon_512.save(OUT_DIR / "icon-512x512.png")
    icon_192.save(OUT_DIR / "icon-192x192.png")
    icon_512.save(
        OUT_DIR / "favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )


if __name__ == "__main__":
    save_png_and_ico()
