#!/bin/bash
directory=dist
branch=gh-pages
build_command() {
  yarn build
}

echo -e "\033[0;32mDeleting old dist...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch....\033[0m"
# Uncomment this line If you delete the dist directory without `git worktree remove`
git worktree prune
git worktree add $directory $branch -f

echo -e "\033[0;32mGenerating dist...\033[0m"
build_command

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git push origin $branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory

echo -e "Done!"