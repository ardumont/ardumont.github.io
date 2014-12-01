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
                             :publishing-directory ,(output-directory "html")
                             :publishing-function org-html-publish-to-html
                             ;; :exclude "PrivatePage.org"   ;; regexp
                             :headline-levels 3
                             :section-numbers nil
                             :with-toc t
                             :html-head "<link rel=\"stylesheet\" href=\"../other/style.css\" type=\"text/css\"/>"
                             :html-preamble t
                             :recursive t)

                            ("images"
                             :base-directory "~/org/img/"
                             :base-extension "jpg\\|gif\\|png"
                             ;; :publishing-directory "/ssh:user@host:~/html/images/"
                             :publishing-directory ,(output-directory "img")
                             :publishing-function org-publish-attachment)

                            ("other"
                             :base-directory "~/org/other/"
                             :base-extension "css\\|el"
                             ;; :publishing-directory "/ssh:user@host:~/html/other/"
                             :publishing-directory ,(output-directory "other")
                             :publishing-function org-publish-attachment)

                            ("website" :components ("orgfiles" "images" "other"))))))

;;; publish.el ends here
