# https://vuepress.vuejs.org/guide/deploy.html#github-pages

# Permission Denied
# chmod +x deploy.sh

#!/usr/bin/env sh

set -e

# VuePress Build
npm run build

# Output Directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# Deploy to https://flutter-osaka.github.io/docs
git push -f git@github.com:flutter-osaka/docs.git master:gh-pages

cd -
