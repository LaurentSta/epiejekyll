# EPIE Jekyll

Ceci est le blog EPIE pour les PSIN.

Blog Jekyll pret pour GitHub Pages.

## Utilisation locale

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

Le site sera disponible sur `http://localhost:4000`.

## Publier sur GitHub Pages

1. Creer un depot GitHub.
2. Pousser ce dossier sur la branche `main`.
3. Dans GitHub, ouvrir `Settings > Pages`.
4. Choisir `GitHub Actions` comme source de deploiement.

Si le site est publie sous une URL de type `https://utilisateur.github.io/nom-du-depot/`, renseigner `baseurl: "/nom-du-depot"` dans `_config.yml`.
