publish:
	yes no | emacs -Q --batch -l ~/public_html/publish.el --funcall org-publish-all

clean:
	rm -rf ~/public_html/*.html ~/public_html/img ~/public_html/other
	rm -rf ~/.org-timestamps
