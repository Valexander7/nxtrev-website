#!/bin/sh
# Builds the site the way GitHub Pages does and serves it at http://localhost:4000.
# Needs Ruby and Jekyll 3.10: gem install jekyll -v "~> 3.10"
cd "$(dirname "$0")/.." && jekyll serve --safe
