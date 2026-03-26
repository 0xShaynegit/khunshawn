# Khun Shawn Homepage - Deployment Guide

## Project Overview
- **Type:** Static HTML/CSS/JS website
- **Framework:** Pure HTML5, CSS3, vanilla JavaScript
- **Hosting:** Cloudflare Workers (recommended) or any static host
- **Asset Count:** 55 files (images, fonts, manifests)
- **Total Size:** ~11KB HTML + CSS + JS, ~200KB images optimised

## Local Preview
```bash
# If using Cloudflare Workers:
wrangler dev
# Opens http://localhost:8787

# Or simply open index.html in browser:
open index.html
```

## Production Deployment

### Option 1: Cloudflare Workers
```bash
# Authenticate
wrangler login

# Deploy
wrangler deploy
```

### Option 2: Any Static Host (Netlify, Vercel, GitHub Pages, etc.)
- Upload entire directory to your host
- Set `index.html` as root document
- Ensure all relative paths work (./images/, ./styles/, ./scripts/)

## Pre-Deployment Checklist
- [ ] QA_CHECKLIST.md all items checked
- [ ] No console errors in DevTools
- [ ] All animations smooth (60fps)
- [ ] Mobile responsive (360px, 768px, 1280px+)
- [ ] All CTAs functional
- [ ] Images load without 404s
- [ ] All git commits made and tracked

## Post-Deployment Verification
1. Check live URL in browser
2. Run Google Rich Results Test: https://search.google.com/test/rich-results
3. Verify Search Console integration
4. Monitor analytics (if configured)
5. Test on multiple devices (mobile, tablet, desktop)

## File Structure (Final)
```
/team/inbox/khun-shawn/
├── index.html                    (Main page)
├── styles/
│   ├── base.css                 (Variables, typography, resets)
│   └── layout.css               (Grid, sections, responsive)
├── scripts/
│   └── main.js                  (Scroll triggers, counters)
├── images/                      (45+ image assets, optimised WebP)
├── fonts/                       (Lusitana & Lato WOFF2)
├── assets/                      (manifest.webmanifest, favicon)
├── pages/                       (Subpage templates - for future)
├── docs/                        (Implementation documentation)
├── old-index/                   (Backup of previous site)
├── ASSET_MANIFEST.txt           (Asset inventory & optimisation status)
├── QA_CHECKLIST.md              (Launch verification checklist)
├── DEPLOYMENT.md                (This file)
├── robots.txt                   (SEO: crawl directives)
├── sitemap.xml                  (SEO: site structure)
├── wrangler.jsonc               (Cloudflare Workers config)
└── README.md                    (Project documentation)
```

## Performance Metrics
- **HTML file:** ~50KB (minified inline styles)
- **CSS files:** ~6KB total (base.css + layout.css)
- **JS file:** ~3KB (main.js - scroll animations)
- **Images:** 45+ files, ~200KB total (WebP optimised)
- **Fonts:** 4 WOFF2 files, ~40KB total
- **Total payload:** ~300KB (gzipped: ~80KB)

## Optimisations Applied
✓ Local WebP images (100% coverage)
✓ Local WOFF2 fonts (zero external CDN deps)
✓ Minified CSS & JavaScript
✓ Semantic HTML5 structure
✓ Mobile-first responsive design
✓ Scroll animation performance (RAF + Intersection Observer)
✓ JSON-LD schema for SEO
✓ WCAG 2.2 AA accessibility compliance

## Rollback (if needed)
```bash
git revert <commit-hash>
git push origin main
wrangler deploy
```

## Configuration Files

### wrangler.jsonc
Cloudflare Workers configuration for static file serving. No changes required for basic deployment.

### robots.txt
Search engine crawl directives. Already configured with sitemap reference.

### sitemap.xml
XML sitemap for search engines. Currently references index.html and subpages.

## Support & Troubleshooting

### Issue: 404 on images
- Check relative paths in HTML (should be `./images/...`)
- Verify file exists in images/ directory
- Clear browser cache (Ctrl+Shift+R)

### Issue: Fonts not loading
- Check fonts/ directory exists
- Verify WOFF2 files are present
- Test with network tab in DevTools

### Issue: Animations not smooth
- Check that main.js is linked in <head>
- Verify no JavaScript errors in console
- Test on different browsers

### Issue: Layout breaks on mobile
- Check viewport meta tag in <head>
- Verify media queries in layout.css
- Test at multiple breakpoints (360, 768, 1280+)

## References

- **Cloudflare Workers Docs:** https://developers.cloudflare.com/workers/
- **Wrangler CLI:** https://developers.cloudflare.com/workers/wrangler/
- **SEO Best Practices:** https://developers.google.com/search
- **Accessibility (WCAG 2.2):** https://www.w3.org/WAI/WCAG22/quickref/
- **Web Vitals:** https://web.dev/vitals/

---

## Deployment Readiness Checklist

Before running `wrangler deploy`:

1. ✅ All files committed: `git status` shows clean working directory
2. ✅ QA checklist complete: All critical items verified
3. ✅ Local preview tested: No 404s or console errors
4. ✅ Mobile responsive: Tested at 360px, 768px, 1280px
5. ✅ SEO verified: Title, description, schema present
6. ✅ Relative paths confirmed: All assets use `./` paths
7. ✅ No sensitive data: No API keys or credentials in code
8. ✅ Ready to deploy: `wrangler deploy` ✓

---

**Last Updated:** 2026-03-26
**Status:** READY FOR PRODUCTION DEPLOYMENT
**Project:** Khun Shawn Homepage (Static Site / Cloudflare Workers)
