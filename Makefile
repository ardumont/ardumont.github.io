publish:
	yes no | emacs -Q --batch -l ~/public_html/publish.el --funcall org-publish-all

clean:
	rm -rf ~/public_html/*.html ~/public_html/img ~/public_html/other
	rm -rf ~/.org-timestamps

pr:
	hub pull-request -b ardumont.github.io:master

install-deps:
	nix-env -i ruby-bundler

setup:
	bundle install --path vendor/bundle

pull:
	git fetch --all --prune
	git merge origin/master
	git push origin master

run-dev:
	bundle exec jekyll serve --watch
