# Associazione Atypical Website

This is the official website for Associazione Atypical, built with Jekyll and hosted on GitHub Pages.

## Project Structure

```
.
├── _posts/              # Blog posts and news articles
├── _layouts/            # Page layouts (handled by theme)
├── _includes/           # Reusable HTML components
├── assets/              # Images, CSS, and other assets
├── _config.yml          # Jekyll configuration
├── index.md             # Homepage
├── about.md             # About page
├── events.md            # Events page
├── contact.md           # Contact page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Ruby 2.7 or higher
- Bundler

### Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/giovami.git
cd giovami
```

2. Install dependencies:
```bash
bundle install
```

3. Build and serve locally:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser to see the site.

## Adding Content

### Adding Blog Posts

Create a new file in `_posts/` with the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-05-14
categories: news
---

Your post content here...
```

### Adding Images

Place images in `assets/images/` and reference them in your posts:

```markdown
![Alt text](/assets/images/your-image.jpg)
```

### Updating Pages

Edit the `.md` files directly (about.md, events.md, contact.md, etc.)

## Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- Navigation menu
- Theme settings
- Social media links

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `master` branch.

Your site will be available at: `https://your-username.github.io/giovami`

## Theme

Currently using the **Minima** theme. To use a different theme, update `_config.yml`:

```yaml
theme: theme-name
```

Popular alternatives:
- minimal
- cayman
- slate
- leap-day

## Support

For questions or issues, please contact us through the website contact page.

## License

© 2026 Associazione Atypical. All rights reserved.
# giovami
