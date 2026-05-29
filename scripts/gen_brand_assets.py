"""Generate brand assets for the law-office site.

Outputs into ./public:
    favicon.svg        — SVG favicon (建律 mark)
    apple-touch-icon.png — 180x180 iOS home screen icon
    og-image.png       — 1200x630 social link preview

Run: python scripts/gen_brand_assets.py
"""

from __future__ import annotations

import os

from PIL import Image, ImageDraw, ImageFont

NAVY = (11, 37, 69)
NAVY_DEEP = (6, 25, 47)
WHITE = (255, 255, 255)
GOLD = (184, 153, 104)
GOLD_SOFT = (216, 193, 152)

FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"
FONT_REG = "C:/Windows/Fonts/malgun.ttf"


def draw_mark(img: Image.Image, cx: int, cy: int, size: int, color=WHITE) -> None:
    """Draw 建律 in a double-bordered square centered at (cx, cy)."""
    draw = ImageDraw.Draw(img)
    half = size // 2

    outer_w = max(2, size // 28)
    draw.rectangle(
        [cx - half, cy - half, cx + half, cy + half],
        outline=color, width=outer_w,
    )
    inset = max(4, size // 14)
    inner_w = max(1, size // 80)
    soft = tuple(int(c * 0.6 + 255 * 0.4) for c in color) if color != WHITE else (255, 255, 255)
    draw.rectangle(
        [cx - half + inset, cy - half + inset, cx + half - inset, cy + half - inset],
        outline=soft, width=inner_w,
    )

    font = ImageFont.truetype(FONT_BOLD, int(size * 0.46))
    text = "建律"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        (cx - tw // 2 - bbox[0], cy - th // 2 - bbox[1]),
        text, font=font, fill=color,
    )


def make_apple_touch_icon() -> None:
    size = 180
    img = Image.new("RGB", (size, size), NAVY)
    draw_mark(img, size // 2, size // 2, int(size * 0.72), WHITE)
    img.save("public/apple-touch-icon.png", "PNG", optimize=True)
    print("apple-touch-icon.png saved")


def make_og_image() -> None:
    W, H = 1200, 630

    # Vertical gradient for sophistication
    base = Image.new("RGB", (W, H), NAVY)
    grad = Image.new("RGB", (1, H))
    for y in range(H):
        t = y / (H - 1)
        r = int(NAVY_DEEP[0] * (1 - t) + NAVY[0] * t)
        g = int(NAVY_DEEP[1] * (1 - t) + NAVY[1] * t)
        b = int(NAVY_DEEP[2] * (1 - t) + NAVY[2] * t)
        grad.putpixel((0, y), (r, g, b))
    base = grad.resize((W, H))

    draw = ImageDraw.Draw(base)

    # Mark on the left
    mark_size = 220
    mark_cx = 200
    mark_cy = H // 2
    draw_mark(base, mark_cx, mark_cy, mark_size, WHITE)

    # Vertical divider line (gold, subtle)
    div_x = mark_cx + mark_size // 2 + 70
    draw.rectangle(
        [div_x, mark_cy - mark_size // 2 + 10, div_x + 1, mark_cy + mark_size // 2 - 10],
        fill=GOLD_SOFT,
    )

    # Title block (right of divider)
    title_x = div_x + 40
    title = "박건률 법무사 사무소"
    title_font = ImageFont.truetype(FONT_BOLD, 64)
    bbox = draw.textbbox((0, 0), title, font=title_font)
    title_h = bbox[3] - bbox[1]
    title_y = mark_cy - title_h - 26
    draw.text((title_x, title_y), title, font=title_font, fill=WHITE)

    # Subtitle
    sub_font = ImageFont.truetype(FONT_BOLD, 30)
    sub = "법원경력 21년 · 의정부"
    draw.text((title_x, title_y + 92), sub, font=sub_font, fill=GOLD_SOFT)

    # Tagline
    tag_font = ImageFont.truetype(FONT_REG, 26)
    tag = "등기 · 민사 · 경매 · 회생 · 가사비송"
    draw.text((title_x, title_y + 150), tag, font=tag_font, fill=(200, 210, 225))

    # Bottom gold accent bar
    bar_y = H - 50
    draw.rectangle([60, bar_y, W - 60, bar_y + 2], fill=GOLD)

    # Tiny brand label bottom-left
    brand_font = ImageFont.truetype(FONT_REG, 18)
    draw.text((60, H - 36), "judicial1.parkbeobmusa", font=brand_font, fill=(160, 175, 200))

    # Top-right tag
    tr_font = ImageFont.truetype(FONT_BOLD, 18)
    tr_text = "JUDICIAL OFFICE"
    bbox = draw.textbbox((0, 0), tr_text, font=tr_font)
    tw = bbox[2] - bbox[0]
    draw.text((W - 60 - tw, 50), tr_text, font=tr_font, fill=GOLD)

    base.save("public/og-image.png", "PNG", optimize=True)
    print("og-image.png saved")


def write_favicon_svg() -> None:
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0b2545"/>
  <rect x="8" y="8" width="48" height="48" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <rect x="12" y="12" width="40" height="40" fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="1"/>
  <text x="32" y="44"
        text-anchor="middle"
        font-family="'Pretendard Variable', Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', system-ui, sans-serif"
        font-weight="900"
        font-size="22"
        letter-spacing="-1.5"
        fill="#ffffff">建律</text>
</svg>
"""
    with open("public/favicon.svg", "w", encoding="utf-8") as f:
        f.write(svg)
    print("favicon.svg saved")


def main() -> None:
    os.makedirs("public", exist_ok=True)
    write_favicon_svg()
    make_apple_touch_icon()
    make_og_image()


if __name__ == "__main__":
    main()
