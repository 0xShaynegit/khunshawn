# QA Checklist - Khun Shawn Homepage

## Performance Checklist
- [ ] All CSS files present and linked (base.css, layout.css, components.css, animations.css)
- [ ] All JS files present and linked (main.js)
- [ ] All images load without 404s
- [ ] All fonts load from local /fonts/ directory
- [ ] No external dependencies except optional Google Fonts fallback
- [ ] Page loads in < 3 seconds on broadband

## Accessibility (WCAG 2.2 AA)
- [ ] All buttons have focus states (lime green outline visible)
- [ ] All interactive elements keyboard-accessible (Tab through page)
- [ ] Page structure semantic (H1, H2, H3 proper nesting)
- [ ] Color contrast: white text on dark background passes AA
- [ ] All sections have descriptive headings
- [ ] Forms (if any) have associated labels

## Mobile Responsiveness
- [ ] Test 360px: Hero, mission, cards stack; text readable
- [ ] Test 768px: 2-column grid visible; button sizes adequate
- [ ] Test 1280px: 4-column grid visible; proper spacing
- [ ] Touch targets minimum 48px × 48px
- [ ] No horizontal scroll on any viewport

## Functionality Testing
- [ ] Hero "Book Discovery Call" button works
- [ ] Final CTA "Book Your Discovery Call" button works
- [ ] Scroll animations trigger (cards fade in, timeline steps animate)
- [ ] Counter animations play (stats 0 → target on scroll)
- [ ] Timeline vertical line visible
- [ ] Hero glitch effect plays on load
- [ ] Parallax effect on hero background smooth

## Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile: iOS Safari, Chrome Android

## SEO
- [ ] Page title correct: "Creator Revenue Systems | Khun Shawn"
- [ ] Meta description present (<160 chars)
- [ ] H1 used once (hero only)
- [ ] JSON-LD schema present (Organization + Service)
- [ ] OG tags present (title, description, image)
- [ ] robots.txt and sitemap.xml present

## Content Review
- [ ] All section copy proofread (no typos)
- [ ] All CTAs clear and action-oriented
- [ ] Testimonial relevant
- [ ] Stats accurate (Years: 14, Creators: 50, Revenue: 2M+, Satisfaction: 99%)
- [ ] All section headings aligned with strategy

## Deployment Readiness
- [ ] All files committed to git
- [ ] No hardcoded development URLs
- [ ] Relative paths for all assets (./images/..., ./styles/...)
- [ ] No sensitive data in code
- [ ] Ready for Cloudflare Workers deployment

## Launch Sign-Off
- [ ] All critical checks complete
- [ ] No console errors
- [ ] All animations smooth (60fps)
- [ ] QA sign-off date: 2026-03-26
