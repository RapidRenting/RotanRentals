from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public" / "assets" / "media"
SOURCE = MEDIA / "PristineBay 1111 edited"
FALLBACK_DIR = MEDIA / "gallery"
ENHANCED_DIR = MEDIA / "enhanced"
THUMB_DIR = MEDIA / "thumbs"

# (source filename, published filename)
PHOTOS = [
    ("DJI_0058-AI.jpeg", "villa-aerial-front.jpg"),
    ("DJI_0066-AI.jpeg", "villa-aerial-caribbean.jpg"),
    ("DJI_0103-AI.jpeg", "villa-aerial-pool.jpg"),
    ("P1013230-AI.jpeg", "garden-entrance.jpg"),
    ("P1013233-AI.jpeg", "garden-exterior.jpg"),
    ("P1013238-AI.jpeg", "rear-garden.jpg"),
    ("P1013242-AI.jpeg", "pool-patio-overview.jpg"),
    ("P1013245-AI.jpeg", "private-infinity-pool.jpg"),
    ("P1013252-AI.jpeg", "pergola-lounge.jpg"),
    ("P1013260-AI.jpeg", "poolside-lounge.jpg"),
    ("P1013262-AI.jpeg", "poolside-dining.jpg"),
    ("P1013271-AI.jpeg", "infinity-edge.jpg"),
    ("P1013273-AI.jpeg", "covered-pool-patio.jpg"),
    ("P1013258-AI.jpeg", "main-living-wide.jpg"),
    ("P1013259-AI.jpeg", "living-pool-doors.jpg"),
    ("P1013275-AI.jpeg", "main-level-flex-nook.jpg"),
    ("P1013281-AI.jpeg", "dining-open-plan.jpg"),
    ("P1013283-AI.jpeg", "entry-staircase.jpg"),
    ("P1013288-AI.jpeg", "dining-garden.jpg"),
    ("P1013290-AI.jpeg", "kitchen-island.jpg"),
    ("P1013292-AI.jpeg", "kitchen-range.jpg"),
    ("P1013295-AI.jpeg", "kitchen-cabinetry.jpg"),
    ("P1013296-AI.jpeg", "kitchen-open-plan.jpg"),
    ("P1013306-AI.jpeg", "main-floor-open-plan.jpg"),
    ("P1013315-AI.jpeg", "living-seating.jpg"),
    ("P1013321-AI.jpeg", "main-level-powder-room.jpg"),
    ("P1013325-AI.jpeg", "primary-bedroom-wide.jpg"),
    ("P1013329-AI.jpeg", "primary-bedroom-bed.jpg"),
    ("P1013330-AI.jpeg", "primary-bedroom-balcony.jpg"),
    ("P1013334-AI-2.jpeg", "primary-terrace.jpg"),
    ("P1013336-AI.jpeg", "primary-terrace-villa.jpg"),
    ("P1013340-AI.jpeg", "primary-terrace-pool-view.jpg"),
    ("P1013346-AI.jpeg", "primary-closet.jpg"),
    ("P1013349-AI.jpeg", "primary-ensuite-water-closet.jpg"),
    ("P1013353-AI.jpeg", "primary-ensuite-vanity.jpg"),
    ("P1013357-AI.jpeg", "primary-ensuite-shower.jpg"),
    ("P1013361-AI.jpeg", "guest-bedroom.jpg"),
    ("P1013363-AI.jpeg", "guest-closet.jpg"),
    ("P1013365-AI.jpeg", "guest-bedroom-tv.jpg"),
    ("P1013370-AI.jpeg", "guest-terrace.jpg"),
    ("P1013376-AI.jpeg", "guest-bedroom-terrace.jpg"),
    ("P1013378-AI.jpeg", "guest-ensuite.jpg"),
    ("P1013380-AI.jpeg", "guest-terrace-seating.jpg"),
    ("P1013382-AI.jpeg", "guest-ensuite-vanity.jpg"),
    ("DJI_0171-AI.jpeg", "pristine-bay-aerial-golf.jpg"),
    ("DJI_0177-AI.jpeg", "pristine-bay-aerial-coast.jpg"),
    ("DJI_0198-AI.jpeg", "pristine-bay-villas-golf.jpg"),
    ("DJI_0239-AI.jpeg", "pristine-bay-sports-courts.jpg"),
    ("DJI_0257-AI.jpeg", "pristine-bay-beach-club.jpg"),
    ("DJI_0278-AI.jpeg", "beach-club-pool-aerial.jpg"),
    ("P1013411-AI.jpeg", "villa-street-entrance.jpg"),
    ("P1013413-AI.jpeg", "beach-club-entrance.jpg"),
    ("P1013420-AI.jpeg", "beach-club-lawn.jpg"),
    ("P1013423-AI.jpeg", "beach-club-pool.jpg"),
    ("P1013428-AI.jpeg", "beach-club-shore.jpg"),
    ("P1013431-AI.jpeg", "black-pearl-fairway.jpg"),
    ("P1013434-AI.jpeg", "black-pearl-fairway-hills.jpg"),
]


def fit_within(image: Image.Image, maximum: int) -> Image.Image:
    output = image.copy()
    output.thumbnail((maximum, maximum), Image.Resampling.LANCZOS)
    return output


for directory in (FALLBACK_DIR, ENHANCED_DIR, THUMB_DIR):
    directory.mkdir(parents=True, exist_ok=True)

results = []
for source_name, published_name in PHOTOS:
    source_path = SOURCE / source_name
    if not source_path.exists():
        raise FileNotFoundError(source_path)

    with Image.open(source_path) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        original_size = image.size

        fallback = fit_within(image, 1600)
        fallback_path = FALLBACK_DIR / published_name
        fallback.save(fallback_path, "JPEG", quality=87, optimize=True, progressive=True)

        enhanced = fit_within(image, 2400)
        enhanced_path = ENHANCED_DIR / Path(published_name).with_suffix(".webp")
        enhanced.save(enhanced_path, "WEBP", quality=87, method=6)

        thumb = ImageOps.fit(image, (480, 360), method=Image.Resampling.LANCZOS)
        thumb_path = THUMB_DIR / Path(published_name).with_suffix(".webp")
        thumb.save(thumb_path, "WEBP", quality=80, method=6)

    results.append({
        "source": source_name,
        "published": published_name,
        "original": original_size,
        "fallback_bytes": fallback_path.stat().st_size,
        "enhanced_bytes": enhanced_path.stat().st_size,
        "thumb_bytes": thumb_path.stat().st_size,
    })

print(json.dumps({
    "photos": len(results),
    "fallback_mb": round(sum(item["fallback_bytes"] for item in results) / 1_000_000, 2),
    "enhanced_mb": round(sum(item["enhanced_bytes"] for item in results) / 1_000_000, 2),
    "thumb_mb": round(sum(item["thumb_bytes"] for item in results) / 1_000_000, 2),
}, indent=2))
