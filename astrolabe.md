---
layout: default
title: Astrolabe
permalink: /astrolabe/
---

<section class="page-hero compact-hero">
  <p class="eyebrow">Groupe PSIN</p>
  <h1>Astrolabe</h1>
  <p>Les articles, traces de progression et projets produits par le groupe Astrolabe pendant la formation PSIN.</p>
</section>

<section class="posts">
  <h2>Articles Astrolabe</h2>

  {% assign astrolab_posts = site.posts | where: "groupe", "astrolab" %}
  {% assign astrolabe_posts = site.posts | where: "groupe", "astrolabe" %}
  {% assign group_posts = astrolab_posts | concat: astrolabe_posts %}
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
    <p class="empty-state">Aucun article Astrolabe pour le moment.</p>
  {% endif %}
</section>
