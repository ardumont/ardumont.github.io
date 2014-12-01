publish:
	emacs -Q --batch -l ~/public_html/publish.el ~/public_html/index.org --funcall org-publish-all

clean:
	rm -rf ~/public_html/html/* ~/public_html/img/* ~/public_html/other/*
	rm -rf ~/.org-timestamps
