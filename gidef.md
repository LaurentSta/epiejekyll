---
layout: default
title: Gidef
permalink: /gidef/
---

<section class="page-hero compact-hero">
  <p class="eyebrow">Groupe PSIN</p>
  <h1>Gidef</h1>
  <p>Un espace dedie aux futurs articles, ateliers et projets du groupe Gidef.</p>
</section>

<section class="posts">
  <h2>Articles Gidef</h2>

  {% assign group_posts = site.posts | where: "groupe", "gidef" %}
  {% if group_posts.size > 0 %}
    <div class="post-list">
      {% for post in group_posts %}
        <article class="post-card">
          <div class="post-card-body">
            <div class="post-card-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%d/%m/%Y" }}
              </time>
              {% if post.categories.first %}
                <span>{{ post.categories.first }}</span>
              {% endif %}
            </div>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            {% if post.excerpt %}
              <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
            {% endif %}
          </div>
          {% assign thumbnail = post.image | default: "/assets/images/vignette-psin-astrolabe.png" %}
          <a class="post-card-thumb" href="{{ post.url | relative_url }}" aria-label="Lire {{ post.title | escape }}">
            <img src="{{ thumbnail | relative_url }}" alt="">
          </a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="empty-state">Les premiers articles Gidef apparaitront ici des qu'ils seront publies sur GitHub.</p>
  {% endif %}
</section>
