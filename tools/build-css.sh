#!/bin/sh
# Compiles the Tailwind classes used in the HTML into assets/css/site.css.
# Run from anywhere after editing classes in any page, then commit site.css.
cd "$(dirname "$0")/.." && npx -y tailwindcss@3 -c tools/tailwind.config.js -i tools/tailwind.src.css -o assets/css/site.css --minify
