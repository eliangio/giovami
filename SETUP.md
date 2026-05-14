# Associazione Atypical Website - Setup Guide

## Quick Start

This website has been initialized with a Jekyll structure. Here's what you need to do to get started:

### 1. Customize Basic Information

Edit `_config.yml` and update:
- `title:` Your site title
- `description:` A short description of your association
- `author.name:` Your association name
- `author.email:` Your contact email

### 2. Add Your Logo & Images

1. Place your logo in `assets/images/logo.png`
2. Add team photos to `assets/images/`
3. Add event photos to `assets/images/`

Then reference them in your pages using:
```markdown
![Logo](/assets/images/logo.png)
```

### 3. Fill in the Pages

Update these files with your actual content:

**about.md** - Tell your story
- [ ] Update mission statement
- [ ] Add team member information
- [ ] Share your history
- [ ] Explain your values

**events.md** - List your events
- [ ] Add upcoming events to the table
- [ ] Include event dates, locations, descriptions
- [ ] Add past events

**contact.md** - Make it easy to reach you
- [ ] Add your email address
- [ ] Add your phone number
- [ ] Add your physical address (optional)
- [ ] Add social media links

**index.md** - Your homepage
- [ ] Update the welcome message
- [ ] Customize the intro text

### 4. Add News & Blog Posts

To add news or announcements:

1. Create a new file in `_posts/` folder
2. Name it: `YYYY-MM-DD-title.md` (example: `2026-05-20-event-announcement.md`)
3. Add this header:

```markdown
---
layout: post
title: "Your Headline Here"
date: 2026-05-20
categories: news
---

Your content here...
```

### 5. Social Media Links

In `_config.yml`, uncomment and update the social media section:

```yaml
minima:
  social_links:
    - { platform: facebook, user_url: "https://facebook.com/yourpage" }
    - { platform: twitter, user_url: "https://twitter.com/yourhandle" }
    - { platform: instagram, user_url: "https://instagram.com/yourhandle" }
    - { platform: github, user_url: "https://github.com/yourusername" }
```

### 6. Theme Customization

The site uses the "Minima" theme. To change the look:

**Dark theme** (current):
```yaml
minima:
  skin: dark
```

**Light theme**:
```yaml
minima:
  skin: light
```

### 7. Local Testing (Optional)

If you want to test locally before publishing:

```bash
# Install dependencies
bundle install

# Run the development server
bundle exec jekyll serve

# Visit http://localhost:4000 in your browser
```

### 8. Publish to GitHub

The site will automatically deploy when you push to GitHub:

```bash
git add .
git commit -m "Initial website setup"
git push origin master
```

Your website will be live at: `https://your-username.github.io/giovami`

---

## File Structure Reference

```
Website/
├── _posts/                    # Blog posts (YYYY-MM-DD-title.md)
├── assets/
│   └── images/                # Your images go here
├── _config.yml                # Main configuration
├── index.md                   # Homepage
├── about.md                   # About page
├── events.md                  # Events page
├── contact.md                 # Contact page
├── Gemfile                    # Ruby dependencies
└── README.md                  # Project info
```

## Common Tasks

### Add a new page

1. Create `yourpage.md` in the root folder
2. Add header:
```markdown
---
layout: page
title: Your Page Title
permalink: /yourpage/
---
```
3. Add content below
4. Update `_config.yml` header_pages to include it

### Change colors

The theme colors are controlled by CSS. Customize by:
1. Check minima theme documentation
2. Create a `_sass/` folder with custom styles
3. Update `_config.yml` with custom settings

### Add contact form

Replace the contact.md form section with a service like:
- Formspree (free, no backend needed)
- Netlify Forms
- Basin

---

## Need Help?

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Minima Theme**: https://github.com/jekyll/minima
- **Markdown Guide**: https://www.markdownguide.org/
- **GitHub Pages Help**: https://docs.github.com/en/pages

---

## Next Steps Checklist

- [ ] Customize `_config.yml` with your information
- [ ] Update about.md with your story
- [ ] Add your logo and images
- [ ] Update events.md with your events
- [ ] Update contact information
- [ ] Add social media links
- [ ] Write your first blog post
- [ ] Test locally (optional)
- [ ] Push to GitHub
- [ ] Share your website!

Good luck! 🚀
