publish:
	cask exec emacs -Q --batch \
		-l ~/.prelude-packs/blog-pack/blog-pack.el \
		--funcall org2jekyll/publish-posts!

clean:
	rm -rf ./_posts/* ./img ./css ./js
	rm -rf ~/.org-timestamps

pr:
	hub pull-request -b ardumont.github.io:master

install-deps:
	nix-env -iA nixpkgs.bundler nixpkgs.ruby_2_1_1

prepare:
	mkdir -p ~/.jekyll/ardumont.github.io/vendor

setup: prepare
	bundle install --path ~/.jekyll/ardumont.github.io/vendor/bundle

pull:
	git fetch --all --prune
	git merge origin/master
	git push origin master

run-dev:
	bundle exec jekyll serve --watch --trace
