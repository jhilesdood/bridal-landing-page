# Reel video slot

`reel.mp4` here is the **web-optimized** showreel (1080×1920 vertical, H.264,
`+faststart`, ~19 MB) and is what deploys to production. It automatically:

- plays as the muted ambient loop behind the hero,
- appears in the large reel section, and
- opens with sound in the lightbox when someone clicks play.

No code change needed — the player looks for `/videos/reel.mp4`.

## Replacing it with a new cut

Export from your editor, then compress before committing (keep it well under
100 MB — ideally < 25 MB so the hero autoplays fast):

    ffmpeg -i your-export.mov -vf "scale=1080:-2" -c:v libx264 -profile:v high \
      -preset medium -crf 24 -pix_fmt yuv420p -c:a aac -b:a 128k \
      -movflags +faststart public/videos/reel.mp4

The full-resolution master lives in `../../reel-source/` (gitignored, never
shipped).

## Prefer to host it externally?

Paste a YouTube or Vimeo link into `REEL_SRC` in `src/data/site.ts` instead;
the lightbox will embed it. Note: the ambient moving hero background only runs
for a self-hosted file, so keep a small `reel.mp4` if you want that effect.
