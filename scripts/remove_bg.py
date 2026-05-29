"""Remove near-white background from a portrait via edge flood fill.

Usage:
    python scripts/remove_bg.py public/prof.jpeg public/prof.png [tolerance]
"""

import sys
from collections import deque

import numpy as np
from PIL import Image, ImageFilter


def main() -> None:
    src = sys.argv[1]
    dst = sys.argv[2]
    tolerance = int(sys.argv[3]) if len(sys.argv) > 3 else 35

    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    h, w = arr.shape[:2]
    print(f"Loaded {src}: {w}x{h}")

    corners = [arr[0, 0, :3], arr[0, w - 1, :3], arr[h - 1, 0, :3], arr[h - 1, w - 1, :3]]
    seed = np.mean([c.astype(int) for c in corners], axis=0)
    print(f"Seed color (corner avg): {seed.astype(int).tolist()}  tolerance={tolerance}")

    visited = np.zeros((h, w), dtype=bool)
    bg = np.zeros((h, w), dtype=bool)

    q: deque = deque()
    for x in range(w):
        q.append((0, x))
        q.append((h - 1, x))
    for y in range(h):
        q.append((y, 0))
        q.append((y, w - 1))

    while q:
        y, x = q.popleft()
        if visited[y, x]:
            continue
        visited[y, x] = True
        pixel = arr[y, x, :3].astype(int)
        if np.max(np.abs(pixel - seed)) > tolerance:
            continue
        bg[y, x] = True
        if y > 0:
            q.append((y - 1, x))
        if y < h - 1:
            q.append((y + 1, x))
        if x > 0:
            q.append((y, x - 1))
        if x < w - 1:
            q.append((y, x + 1))

    bg_count = int(bg.sum())
    total = h * w
    print(f"BG pixels: {bg_count}/{total} ({100 * bg_count / total:.1f}%)")

    arr[bg, 3] = 0

    alpha_img = Image.fromarray(arr[:, :, 3])
    alpha_smooth = alpha_img.filter(ImageFilter.GaussianBlur(radius=1.2))
    arr[:, :, 3] = np.array(alpha_smooth)

    out = Image.fromarray(arr)
    out.save(dst, "PNG", optimize=True)
    print(f"Saved {dst}")


if __name__ == "__main__":
    main()
