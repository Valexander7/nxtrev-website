#!/bin/sh
# Compiles the Tailwind classes used in the HTML into assets/css/site.css.
# Run from anywhere after editing classes in any page, then commit site.css.
# The Hallmark check stamp (tools/hallmark-stamp.css) is put back on line 1 after minifying.
cd "$(dirname "$0")/.." && npx -y tailwindcss@3 -c tools/tailwind.config.js -i tools/tailwind.src.css -o assets/css/site.css --minify && cat tools/hallmark-stamp.css assets/css/site.css > assets/css/site.css.tmp && mv assets/css/site.css.tmp assets/css/site.css
