# Projet Apothéose O'clock : 0'Japon

Le projet O'Japon est un site collaboratif, permettant à des voyageurs de partager leur expérience de voyage, et à de futurs voyageurs de préparer leur séjour au Japon.

O'Japon is a collaborative website, allowing travelers to share their travel experience, and future travelers to prepare their stay in Japan.

## Frontend

Ce dépôt ne concerne que le frontend du projet, qui est développé à l'aide du [framework Vue.js](https://vuejs.org/).

_This repository only contains the front-end project with [Vue.js framework](https://vuejs.org/)._

## Backend

Le back-end est assuré par [WordPress](https://wordpress.org/) en mode API.

_The back-end is handled by headless [WordPress](https://wordpress.org/) and its API._

Le dépôt pour le back-end se trouve [ici](https://github.com/AurelieCuignet/o-japon-back).

_See back-end repository [here](https://github.com/AurelieCuignet/o-japon-back)_

## Configuration initiale / _Initial setting_

If Vue.js is not installed on your system yet, you'll need to install it.

Then create a new project

```
npm install -g @vue/cli
```

Vue Router and VUeX are required for this project

```
vue add router

vue add vuex
```

### Compiles and hot-reloads for development

To use a local development server

```
npm run serve
```

### Compiles and minifies for production (later)
```
npm run build
```
