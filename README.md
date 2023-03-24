# Portal website of Puzzlout company using [Mr Hope very feature-rich VuePress theme](https://theme-hope.vuejs.press/)

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/aabaf9be-15b0-4ddc-9944-be4c7aff5057/deploy-status)](https://app.netlify.com/sites/passonslecap/deploys) -->

## Table of contents

[Prerequisites](#prerequisites)

[Getting started](#getting-started)

[VuePress changelogs and upgrade](#vuepress-changelogs-and-upgrade)

[VuePress theme upgrade](#vuepress-theme-changelost-and-upgrade)

## Prerequisites

- [Git bash](https://git-scm.com/downloads)
- [NodeJS 18.0.0](https://nodejs.org/en/blog/release/v16.13.1/)
- [Latest Visual Studio Code](https://code.visualstudio.com/download)

## Getting started

Using yarn makes the installation **much quicker**.

```sh
npm install --global yarn #(or use the .msi => https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
yarn
```

Then, launch the project locally:

```sh
npm run docs:dev
```

Or to build it:

```sh
npm run docs:build
```

## VuePress changelogs and upgrade

See [this link](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md).

When upgrading and having issues with builds, use the following commands:

1. run `yarn upgrade vuepress-vite@2.0.0-beta.XX`
2. run `rm -R node_modules && rm yarn.lock && yarn install`
3. run `npm run docs:build`
4. run `npm run docs:dev` to see if the site loads and renders well :)

## VuePress theme changelost and upgrade

See [this link](https://github.com/vuepress-theme-hope/vuepress-theme-hope/releases).

Run:

```sh
yarn upgrade vuepress-theme-hope@2.0.0-beta.XX
```
