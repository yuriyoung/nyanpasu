.PHONY: all deploy clean

all: dist dist/index.html

dist:
	git worktree add dist gh-pages

# Replace this rule with whatever builds your project
dist/index.html: src/index.html
	cp $< $@

deploy: all
	cd dist && \
	git add --all && \
	git commit -m "Deploy updates" && \
	git push origin gh-pages

# Removing the actual dist directory confuses git and will require a git worktree prune to fix
clean:
	rm -rf dist/*