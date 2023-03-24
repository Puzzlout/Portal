#!/bin/bash

git checkout main && git pull && git checkout -b upgradeToVuePress$1
rm -R node_modules && rm yarn.lock && 
yarn
yarn upgrade vuepress-vite@2.0.0-beta.$1
yarn upgrade vuepress-theme-hope@2.0.0-beta.$2
npm run docs:build
npm run docs:dev