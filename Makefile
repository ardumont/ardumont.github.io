publish:
	yes no | emacs -Q --batch -l ./publish.el --funcall org-publish-all

clean:
	rm -rf ./jekyll/*.html ./blog/* ./img ./css ./js
	rm -rf ~/.org-timestamps

pr:
	hub pull-request -b ardumont.github.io:master

install-deps:
	nix-env -i ruby-bundler

setup:
	mkdir -p ~/.jekyll/ardumont.github.io/vendor
	bundle install --path ~/.jekyll/ardumont.github.io/vendor/bundle

pull:
	git fetch --all --prune
	git merge origin/master
	git push origin master

run-dev:
	bundle exec jekyll serve --watch --trace
