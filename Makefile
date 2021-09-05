activate:
	nix develop

publish:
	cask exec emacs -Q --batch \
		-l ~/.prelude-packs/blog-pack/blog-pack.el \
		--funcall org2jekyll/publish-posts!

clean:
	rm -rf ./_posts/* ./img ./css ./js
	rm -rf ~/.org-timestamps

pr:
	hub pull-request -b ardumont.github.io:master

update:
	bundle update; bundle lock; bundix

pull:
	git fetch --all --prune
	git merge origin/master
	git push origin master

run-dev:
	bundle exec jekyll serve --watch --trace

clean-dev:
	rm -rf ~/.gem/  # careful now
	bundle exec jekyll clean --force
