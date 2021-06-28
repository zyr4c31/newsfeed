#!/usr/bin/env sh

set -e

git init
git add -A
git commit -m 'github pages deployment'
git push -f git@github.com:zyr4c31/newsfeed.git master
npm run build

cd dist

git init
git add -A
git commit -m 'github pages deployment'
git push -f git@github.com:zyr4c31/newsfeed.git master:gh

cd -