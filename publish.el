;;; publish.el --- Publish my org files as blog post

;;; Commentary:

;;; Code:

(require 'org)

(defvar source-directory nil "Path to the source directory.")
(defvar jekyll-directory nil "Path to Jekyll blog.")
(defvar jekyll-drafts-dir nil "Relative path to drafts directory.")
(defvar jekyll-posts-dir nil "Relative path to posts directory.")
(defvar jekyll-post-ext nil "File extension of Jekyll posts.")
(defvar jekyll-post-template nil "Default template for Jekyll posts.
%s will be replace by the post title.")

(setq source-directory     (expand-file-name "~/org/")
      jekyll-directory     (expand-file-name "~/public_html/")
      jekyll-drafts-dir    "_drafts/"
      jekyll-posts-dir     "_posts/"
      jekyll-post-ext      ".org"
      jekyll-post-template "#+STARTUP: showall\n#+STARTUP: hidestars\n#+OPTIONS: H:2 num:nil tags:nil toc:1 timestamps:t\n#+BEGIN_HTML\n---\nlayout: post\ntitle: %s\nexcerpt: \ncategories:\n  -  \ntags:\n  -  \npublished: false\n---\n#+END_HTML\n\n** ")

(defun input-directory (&optional folder-name)
  "Compute the input folder from the FOLDER-NAME."
  (format "%s/%s" source-directory (if folder-name folder-name "")))

(defun output-directory (folder-name)
  "Compute the output folder from the FOLDER-NAME."
  (format "%s/%s" jekyll-directory folder-name))

;; org setup for publishing blog
(custom-set-variables '(org-publish-project-alist
                        `(("orgfiles"
                           :base-directory ,(input-directory)
                           :base-extension "org"
                           ;; :publishing-directory "/ssh:user@host:~/html/notebook/"
                           :publishing-directory ,(output-directory "blog")
                           :publishing-function org-html-publish-to-html
                           :headline-levels 4
                           :section-numbers nil
                           :with-toc nil
                           :html-head "<link rel=\"stylesheet\" href=\"./css/style.css\" type=\"text/css\"/>"
                           :html-preamble t
                           :recursive t
                           :make-index t
                           :html-extension "html"
                           :body-only t
                           ;; :blog-publishing-directory ,(output-directory "_posts")
                           ;; :site-root "https://ardumont.github.io"
                           )

                          ("images"
                           :base-directory ,(input-directory "img")
                           :base-extension "jpg\\|gif\\|png"
                           :publishing-directory ,(output-directory "img")
                           :publishing-function org-publish-attachment)

                          ("js"
                           :base-directory ,(input-directory "js")
                           :base-extension "js"
                           :publishing-directory ,(output-directory "js")
                           :publishing-function org-publish-attachment)

                          ("other"
                           :base-directory ,(input-directory "css")
                           :base-extension "css\\|el"
                           :publishing-directory ,(output-directory "css")
                           :publishing-function org-publish-attachment)

                          ("website" :components ("orgfiles" "images" "js" "css")))))

(defun jekyll-make-slug (s)
  "Turn a string S into a slug."
  (replace-regexp-in-string
   " " "-" (downcase
            (replace-regexp-in-string
             "[^A-Za-z0-9 ]" "" s))))

(defun jekyll-yaml-escape (s)
  "Escape a string S for YAML."
  (if (or (string-match ":" s)
          (string-match "\"" s))
      (concat "\"" (replace-regexp-in-string "\"" "\\\\\"" s) "\"")
    s))

(defun jekyll-draft-post (title)
  "Create a new Jekyll blog post with TITLE."
  (interactive "sPost Title: ")
  (let ((draft-file (concat jekyll-directory jekyll-drafts-dir
                            (jekyll-make-slug title)
                            jekyll-post-ext)))
    (if (file-exists-p draft-file)
        (find-file draft-file)
      (find-file draft-file)
      (insert (format jekyll-post-template (jekyll-yaml-escape title))))))

(defun jekyll-publish-post ()
  "Move a draft post to the posts directory.
Rename it so that it contains the date."
  (interactive)
  (cond ((not (equal (file-name-directory (buffer-file-name (current-buffer)))
                     (concat jekyll-directory jekyll-drafts-dir)))
         (progn
           (message "This is not a draft post.")
           (insert (file-name-directory (buffer-file-name (current-buffer))) "\n"
                   (concat jekyll-directory jekyll-drafts-dir))))
        ((buffer-modified-p)
         (message "Can't publish post; buffer has modifications."))
        (t
         (let ((filename (concat jekyll-directory jekyll-posts-dir
                                 (format-time-string "%Y-%m-%d-")
                                 (file-name-nondirectory
                                  (buffer-file-name (current-buffer)))))
               (old-point (point)))
           (rename-file (buffer-file-name (current-buffer))
                        filename)
           (kill-buffer nil)
           (find-file filename)
           (set-window-point (selected-window) old-point)))))

(defun jekyll-list-posts ()
  "Lists the posts folder."
  (interactive)
  (find-file (output-directory jekyll-posts-dir)))

(defun jekyll-list-drafts ()
  "Lists the drafts folder."
  (interactive)
  (find-file (output-directory jekyll-drafts-dir)))

;; Improve our blogging experience with Org-Jekyll. This code sets four
;; functions with corresponding key bindings:
;;
;; C-c b n - Create new draft
;; C-c b P - Post current draft
;; C-c b d - Show all drafts
;; C-c b p - Show all posts
;;
;; Once a draft has been posted (i.e., moved from the _drafts
;; directory to _post with the required date prefix in the filename), we
;; then need to html-export it to the jekyll rootdir (with org-publish).

;; (global-set-key (kbd "C-c b n") 'jekyll-draft-post)
;; (global-set-key (kbd "C-c b P") 'jekyll-publish-post)
;; (global-set-key (kbd "C-c b p") 'jekyll-list-posts)
;; (global-set-key (kbd "C-c b D") 'jekyll-list-drafs)

;;; publish.el ends here
