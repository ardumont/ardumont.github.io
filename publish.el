;;; publish.el --- Publish my org files as blog post

;;; Commentary:

;;; Code:

(require 'org)

(defun output-directory (folder-name)
  "Compute the output folder from the FOLDER-NAME."
  (format "~/public_html/%s" folder-name))

(let ((output-directory "~/public_html"))
  ;; org setup for publishing blog
  (custom-set-variables '(org-publish-project-alist
                          `(("orgfiles"
                             :base-directory "~/org/"
                             :base-extension "org"
                             ;; :publishing-directory "/ssh:user@host:~/html/notebook/"
                             :publishing-directory ,(output-directory "jekyll")
                             :publishing-function org-html-publish-to-html
                             :headline-levels 4
                             :section-numbers nil
                             :with-toc t
                             :html-head "<link rel=\"stylesheet\" href=\"./css/style.css\" type=\"text/css\"/>"
                             :html-preamble t
                             :recursive t
                             :make-index t
                             :html-extension "html"
                             :body-only t)

                            ("images"
                             :base-directory "~/org/img/"
                             :base-extension "jpg\\|gif\\|png"
                             :publishing-directory ,(output-directory "img")
                             :publishing-function org-publish-attachment)

                            ("js"
                             :base-directory "~/org/js/"
                             :base-extension "js"
                             :publishing-directory ,(output-directory "js")
                             :publishing-function org-publish-attachment)

                            ("other"
                             :base-directory "~/org/css/"
                             :base-extension "css\\|el"
                             :publishing-directory ,(output-directory "css")
                             :publishing-function org-publish-attachment)

                            ("website" :components ("orgfiles" "images" "js" "css"))))))

;;; publish.el ends here
