---
layout: home
title: Home
---

<div style="text-align: center; padding: 60px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px; margin-bottom: 40px;">
  <h1 style="font-size: 48px; margin: 0; font-weight: bold;">Associazione Atypical</h1>
  <p style="font-size: 20px; margin-top: 10px; opacity: 0.95;">Empowering Diverse Communities, Building Inclusive Communities</p>
  <div style="margin-top: 30px;">
    <a href="/about/" style="display: inline-block; background: white; color: #667eea; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 0 10px;">Explore Our Story</a>
    <a href="/contact/" style="display: inline-block; background: transparent; color: white; padding: 12px 30px; border: 2px solid white; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 0 10px;">Get In Touch</a>
  </div>
</div>

## Our Mission

We are **Associazione Atypical**, a non-profit organization founded in May 2018 dedicated to creating an **inclusive and supportive community** for individuals with diverse needs and perspectives. We create spaces where everyone belongs, fostering collaboration, growth, and meaningful connections. We believe in the power of collective support and work toward lasting positive impact in our communities.

**Based in Minori, Salerno (SA), Italy** 🇮🇹

---

## Quick Navigation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
    <h3 style="margin-top: 0;">📋 About Us</h3>
    <p>Learn about our association, our values, and what drives us forward.</p>
    <a href="/about/" style="color: #667eea; font-weight: bold;">Learn more →</a>
  </div>
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
    <h3 style="margin-top: 0;">👥 Our Members</h3>
    <p>Meet the incredible people who make our association thrive and grow.</p>
    <a href="/members/" style="color: #764ba2; font-weight: bold;">Meet the team →</a>
  </div>
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
    <h3 style="margin-top: 0;">🎯 Our Projects</h3>
    <p>Discover the initiatives and projects we're working on to create impact.</p>
    <a href="/projects/" style="color: #667eea; font-weight: bold;">See our work →</a>
  </div>
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
    <h3 style="margin-top: 0;">📅 Events</h3>
    <p>Join us at our upcoming events and be part of the community.</p>
    <a href="/events/" style="color: #764ba2; font-weight: bold;">View events →</a>
  </div>
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
    <h3 style="margin-top: 0;">📜 Statute</h3>
    <p>Read our founding principles and organizational guidelines.</p>
    <a href="/statute/" style="color: #667eea; font-weight: bold;">Read statute →</a>
  </div>
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
    <h3 style="margin-top: 0;">📞 Contact</h3>
    <p>Have questions? We'd love to hear from you. Get in touch today.</p>
    <a href="/contact/" style="color: #764ba2; font-weight: bold;">Contact us →</a>
  </div>
</div>

---

## Latest News

{% for post in site.posts limit:3 %}
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
  <h3 style="margin-top: 0;"><a href="{{ post.url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a></h3>
  <p style="color: #666; font-size: 14px; margin: 0;">{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <a href="{{ post.url }}" style="color: #667eea; font-weight: bold;">Read more →</a>
</div>
{% endfor %}

---

## Join Our Community

Ready to be part of something special? Whether you want to participate in our events, contribute to our projects, or simply stay updated on our work, we'd love to have you on board.

<div style="text-align: center; margin-top: 40px;">
  <a href="/contact/" style="display: inline-block; background: #667eea; color: white; padding: 15px 40px; border-radius: 5px; text-decoration: none; font-weight: bold; font-size: 16px;">Contact Us Today</a>
</div>
