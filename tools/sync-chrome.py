#!/usr/bin/env python3
"""Copy the shared header, footer and head assets into every page.

Each page marks the regions it takes from tools/partials/ with comments:
  <!-- chrome:head-assets --> ... <!-- /chrome:head-assets -->
  <!-- chrome:header -->      ... <!-- /chrome:header -->
  <!-- chrome:footer -->      ... <!-- /chrome:footer -->
Edit the partials, then run: python3 tools/sync-chrome.py
Then rebuild CSS (./tools/build-css.sh) and commit both.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PARTIALS = os.path.join(ROOT, 'tools', 'partials')

# Page file -> which nav item it belongs to.
SECTIONS = {
    'index.html': 'home',
    'products.html': 'products',
    'linecard.html': 'linecard',
    'about.html': 'about',
    'contact.html': 'contact',
    '404.html': 'none',
}


def pages():
    for name in sorted(os.listdir(ROOT)):
        if name.endswith('.html'):
            yield name, ''
    for name in sorted(os.listdir(os.path.join(ROOT, 'products'))):
        if name.endswith('.html') and name != 'index.html':
            yield os.path.join('products', name), '../'


def render(partial, root, section):
    text = open(os.path.join(PARTIALS, partial + '.html'), encoding='utf-8').read()
    text = text.replace('{{root}}', root)
    text = re.sub(r'\{\{active:(\w+)\}\}',
                  lambda m: ' !text-slate-900 !font-semibold' if m.group(1) == section else '', text)
    text = re.sub(r'\{\{current:(\w+)\}\}',
                  lambda m: ' aria-current="page"' if m.group(1) == section else '', text)
    return text


def main():
    changed = 0
    for rel, root in pages():
        path = os.path.join(ROOT, rel)
        section = 'products' if rel.startswith('products') else SECTIONS.get(rel, 'none')
        src = open(path, encoding='utf-8').read()
        out = src
        for part in ('head-assets', 'header', 'footer'):
            pattern = re.compile(r'(<!-- chrome:%s -->\n)(.*?)(^\s*<!-- /chrome:%s -->)' % (part, part), re.S | re.M)
            out = pattern.sub(lambda m: m.group(1) + render(part, root, section) + m.group(3), out)
        if out != src:
            open(path, 'w', encoding='utf-8').write(out)
            changed += 1
            print('updated', rel)
    if not changed:
        print('all pages already in sync')
    return 0


if __name__ == '__main__':
    sys.exit(main())
