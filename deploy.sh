#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'gh'
git push -f git@github.com:zyr4c31/newsfeed.git master:gh

cd -