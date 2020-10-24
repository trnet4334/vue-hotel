git checkout --orphan gh-pages
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'Deploy'
git push origin HEAD:gh-pages -f
rm -r dist
git checkout -f master
git branch -D gh-pages
