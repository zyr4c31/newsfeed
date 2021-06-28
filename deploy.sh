#!/usr/bin/env sh

set -e

git init
#!git branch master
git add -A
git commit -m 'separated routing'
git push -f git@github.com:zyr4c31/newsfeed.git master #! git@github.com:<username>/<repo_name>.git <branch>
npm run build

cd dist

git init
git add -A
git commit
git push -f git@github.com:zyr4c31/newsfeed.git master:gh-pages

cd -