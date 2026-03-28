from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "static" / "img" / "og"
LOGO_PATH = ROOT / "static" / "img" / "compilersutra-logo-source.jpg"

WIDTH = 1200
HEIGHT = 630
PADDING_X = 88
PADDING_Y = 72

FONT_BOLD_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
]

FONT_REGULAR_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]

CARDS = [
    {"slug": "master", "category": "Platform", "title": "Compiler Engineering"},
    {"slug": "tracks", "category": "Tracks", "title": "Learning Tracks"},
    {"slug": "compilers", "category": "Docs", "title": "Compiler Design"},
    {"slug": "llvm", "category": "Docs", "title": "LLVM and IR"},
    {"slug": "mlir", "category": "Docs", "title": "MLIR"},
    {"slug": "tvm", "category": "Docs", "title": "TVM"},
    {"slug": "gpu", "category": "Tutorials", "title": "GPU Programming"},
    {"slug": "linux", "category": "Tutorials", "title": "Linux and Systems"},
    {"slug": "cpp", "category": "Tutorials", "title": "Modern C++"},
    {"slug": "mcq", "category": "Practice", "title": "MCQ Hub"},
    {"slug": "articles", "category": "Articles", "title": "Articles and Reports"},
    {"slug": "benchmarks", "category": "Benchmarks", "title": "Benchmark Reports"},
    {"slug": "tools", "category": "Docs", "title": "Tools"},
    {"slug": "labs", "category": "Build", "title": "Labs"},
    {"slug": "coa", "category": "Architecture", "title": "Computer Organization"},
    {"slug": "compilersutra-social-card", "category": "CompilerSutra", "title": "CompilerSutra"},
]


def pick_font(candidates, size):
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


FONT_TAG = pick_font(FONT_BOLD_CANDIDATES, 22)
FONT_TITLE = pick_font(FONT_BOLD_CANDIDATES, 78)
FONT_BRAND = pick_font(FONT_BOLD_CANDIDATES, 34)


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if draw.textlength(candidate, font=font) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_background(canvas):
    px = canvas.load()
    top = (6, 9, 18)
    bottom = (14, 15, 27)

    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        for x in range(WIDTH):
            px[x, y] = (r, g, b, 255)

    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    add_blur_ellipse(overlay, (760, -60, 1300, 360), (255, 77, 77, 70), 120)
    add_blur_ellipse(overlay, (-120, 340, 420, 760), (32, 91, 255, 36), 140)
    canvas.alpha_composite(overlay)


def add_blur_ellipse(canvas, bbox, color, blur):
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse(bbox, fill=color)
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    canvas.alpha_composite(layer)


def prepare_logo(size=292):
    logo = Image.open(LOGO_PATH).convert("RGBA").resize((size, size))
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    logo.putalpha(mask)
    return logo


def draw_logo(canvas):
    logo = prepare_logo()
    x = WIDTH - 420
    y = 150

    glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    add_blur_ellipse(glow, (x - 24, y - 22, x + 320, y + 320), (255, 77, 77, 36), 72)
    canvas.alpha_composite(glow)

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.ellipse((x + 10, y + 14, x + 302, y + 306), fill=(0, 0, 0, 118))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    canvas.alpha_composite(shadow)

    canvas.alpha_composite(logo, (x, y))


def draw_category_tag(draw, category):
    x0 = PADDING_X
    y0 = PADDING_Y
    width = int(draw.textlength(category, font=FONT_TAG) + 40)
    x1 = x0 + width
    y1 = y0 + 42

    draw.rounded_rectangle(
        (x0, y0, x1, y1),
        radius=20,
        fill=(10, 16, 28, 186),
        outline=(255, 77, 77, 110),
        width=1,
    )
    draw.text((x0 + 20, y0 + 9), category, font=FONT_TAG, fill=(244, 246, 250))


def draw_title(draw, title):
    lines = wrap_text(draw, title, FONT_TITLE, 540)
    y = 184
    for line in lines[:2]:
        draw.text((PADDING_X, y), line, font=FONT_TITLE, fill=(245, 247, 250))
        y += 88


def draw_brand(draw):
    draw.text((PADDING_X, HEIGHT - 112), "CompilerSutra", font=FONT_BRAND, fill=(245, 247, 250))


def build_card(card):
    canvas = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 255))
    draw_background(canvas)
    draw = ImageDraw.Draw(canvas, "RGBA")

    draw_category_tag(draw, card["category"])
    draw_title(draw, card["title"])
    draw_brand(draw)
    draw_logo(canvas)

    return canvas.convert("RGB")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for card in CARDS:
        image = build_card(card)
        image.save(OUTPUT_DIR / f"{card['slug']}.png", format="PNG", optimize=True)


if __name__ == "__main__":
    main()
