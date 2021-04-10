# ipfs-chat

## Project setup
```
npm install -g node-pre-gyp @vue/cli
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### gh-pages
comment /dist in .gitignore
```
npm run build 
git add dist -f && git commit -m "Initial dist subtree commit"

//Les dernières commandes vont nous permettre d’ajouter tous les fichiers, de publier le dossier /dist , de l’utiliser pour créer un subtree (sous-arbre) et de l’envoyer sur une branche nommée gh-pages

git add . && git commit -m "ajout de dist"
git push --set-upstream origin main
git subtree push --prefix dist origin gh-pages
```
