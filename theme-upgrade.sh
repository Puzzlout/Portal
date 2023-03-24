#!/bin/bash

git checkout main && git pull && git checkout -b upgradeToVuePressTheme$1
#rm -R node_modules && rm yarn.lock
#yarn
yarn upgrade vuepress-theme-hope@2.0.0-beta.$1
npm run docs:build
npm run docs:dev
git bv && git ac "bump theme to $1" && git push --set-upstream origin upgradeToVuePressTheme$1
