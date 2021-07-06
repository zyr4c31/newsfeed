#!/usr/bin/env sh

set -e

git init
#!git branch master
git add -A
git commit -m 'fix: router params warning'
git push -f git@github.com:zyr4c31/newsfeed.git main #! git@github.com:<username>/<repo_name>.git <branch>
npm run build

cd dist

git init
git add -A
git commit -m 'github pages deployment'
git push -f git@github.com:zyr4c31/newsfeed.git main:gh-pages

cd -