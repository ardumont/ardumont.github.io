;;; org2jekyll.el --- Minor mode to publish org-mode post to jekyll without specific yaml

;; Copyright (C) 2013 Antoine R. Dumont <eniotna.t AT gmail.com>

;; Author: Antoine R. Dumont <eniotna.t AT gmail.com>
;; Maintainer: Antoine R. Dumont <eniotna.t AT gmail.com>
;; Version: 0.0.1
;; Package-Requires: ((dash "2.8.0") (s "1.9.0") (deferred "0.3.2"))
;; Keywords: org-mode trello sync org-trello
;; URL: https://github.com/org-trello/org-trello

;; This file is NOT part of GNU Emacs.

;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 3, or (at your option)
;; any later version.
;;
;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
;; GNU General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs; see the file COPYING. If not, write to the
;; Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
;; Boston, MA 02110-1301, USA.

;;; Commentary:

;; Functions to ease publishing jekyll posts from org file

;;; Code:

(require 'org)

(defvar source-directory     nil "Path to the source directory.")
(defvar jekyll-directory     nil "Path to Jekyll blog.")
(defvar jekyll-drafts-dir    nil "Relative path to drafts directory.")
(defvar jekyll-posts-dir     nil "Relative path to posts directory.")
(defvar jekyll-post-ext      nil "File extension of Jekyll posts.")
(defvar jekyll-org-post-template nil "Default template for org2jekyll posts.
%s will be replace by the post title.")

(setq source-directory     (expand-file-name "~/org")
      jekyll-directory     (expand-file-name "~/public_html")
      jekyll-drafts-dir    "_drafts/"
      jekyll-posts-dir     "_posts/"
      jekyll-post-ext      ".org"
      jekyll-org-post-template "#+STARTUP: showall\n#+STARTUP: hidestars\n#+OPTIONS: H:2 num:nil tags:nil toc:1 timestamps:t\n#+LAYOUT: post\n#+TITLE: %s\n#+DESCRIPTION: \n#+CATEGORIES:\n\n* ")

(defun input-directory (&optional folder-name)
  "Compute the input folder from the FOLDER-NAME."
  (format "%s/%s" source-directory (if folder-name folder-name "")))

(defun output-directory (folder-name)
  "Compute the output folder from the FOLDER-NAME."
  (format "%s/%s" jekyll-directory folder-name))

;; org setup for publishing blog
(custom-set-variables '(org-publish-project-alist
                        `(("org"
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
                           :body-only t)

                          ("tony-blog"
                           :base-directory ,(input-directory)
                           :base-extension "org"
                           :publishing-directory ,(output-directory "_posts")
                           :publishing-function org-html-publish-to-html
                           :headline-levels 4
                           :section-numbers nil
                           :with-toc nil
                           :html-head "<link rel=\"stylesheet\" href=\"./css/style.css\" type=\"text/css\"/>"
                           :html-preamble t
                           :recursive t
                           :make-index t
                           :html-extension "html"
                           :body-only t)

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

                          ("website" :components ("org" "tony-blog" "images" "js" "css")))))

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
      (progn (find-file draft-file)
             (insert (format jekyll-org-post-template (jekyll-yaml-escape title)))))))

(defun jekyll-list-posts ()
  "Lists the posts folder."
  (interactive)
  (find-file (output-directory jekyll-posts-dir)))

(defun jekyll-list-drafts ()
  "Lists the drafts folder."
  (interactive)
  (find-file (output-directory jekyll-drafts-dir)))

(defun publish/get-option! (opt)
  "Gets the header value of the option OPT from a buffer."
  (let* ((regexp (org-make-options-regexp (list (upcase opt) (downcase opt)))))
    (save-excursion
      (goto-char (point-min))
      (if (re-search-forward regexp nil t 1)
          (match-string-no-properties 2)))))

(defun publish/get-option-from-file! (orgfile option)
  "Return the ORGFILE's OPTION."
  (with-temp-buffer
    (when (file-exists-p orgfile)
      (insert-file-contents orgfile)
      (goto-char (point-min))
      (publish/get-option! option))))

(defun publish/get-options-from-file! (orgfile options)
  "Return the ORGFILE's OPTIONS."
  (with-temp-buffer
    (when (file-exists-p orgfile)
      (insert-file-contents orgfile)
      (mapcar (lambda (option)
                (save-excursion
                  (goto-char (point-min))
                  (cons option (publish/get-option! option))))
              options))))

(defun publish/article-p! (orgfile)
  "Determine if the current ORGFILE is an article or not.
Depends on the metadata header blog."
  (publish/get-option-from-file! orgfile "BLOG"))

(defun publish/get-publish-date! (orgfile)
  "Get the publication date from an ORGFILE."
  (publish/get-option-from-file! orgfile "DATE"))

(defvar publish/map-keys '(("title" . "title")
                           ("categories" . "categories")
                           ("date" . "date")
                           ("description" . "excerpt")
                           ("author" . "author")
                           ("layout" . "layout")
                           ("blog" . "blog"))
  "Keys to map from org headers to jekyll's headers.")

(defun publish/org-to-yaml-metadata (org-metadata)
  "Given an ORG-METADATA map, return a yaml one with transformed data."
  (--map `(,(assoc-default (car it) publish/map-keys) . ,(cdr it)) org-metadata))

(defun publish/convert-timestamp-to-yyyy-dd-mm (timestamp)
  "Convert org TIMESTAMP to ."
  (format-time-string "%Y-%m-%d"
                      (apply 'encode-time (org-parse-time-string timestamp))))

(require 'dash)
(require 's)

(defun publish/to-yaml-header (org-metadata)
  "Given a list of ORG-METADATA, compute the yaml header string."
  (--> org-metadata
    publish/org-to-yaml-metadata
    (--map (format "%s: %s" (car it) (cdr it)) it)
    (cons "---" it)
    (cons "#+BEGIN_HTML" it)
    (-snoc it "---")
    (-snoc it "#+END_HTML\n")
    (s-join "\n" it)))

(defun publish/categories-csv-to-yaml (categories-csv)
  "Transform a CATEGORIES-CSV entries into a yaml entries."
  (->> categories-csv
    (concat ",")
    (s-replace ", " ",")
    (s-replace "," "\n- ")
    s-trim
    (concat "\n")))

(defun publish/publish-post! (&optional org-file)
  "Publish a post ready for jekyll to render it."
  (interactive)
  (let ((orgfile (if org-file org-file (buffer-file-name (current-buffer)))))
    (if (publish/article-p! orgfile)
        (let* ((org-metadata             (publish/get-options-from-file! orgfile '("title" "date" "categories" "description" "author" "blog")))
               (date                     (publish/convert-timestamp-to-yyyy-dd-mm (assoc-default "date" org-metadata)))
               (blog-project             (assoc-default "blog" org-metadata))
               (yaml-headers             `(("layout"      . "post")
                                           ("title"       . ,(assoc-default "title" org-metadata))
                                           ("date"        . ,date)
                                           ("categories"  . ,(publish/categories-csv-to-yaml (assoc-default "categories" org-metadata)))
                                           ("author"      . ,(assoc-default "author" org-metadata))
                                           ("description" . ,(assoc-default "description" org-metadata))))
               (temp-org-jekyll-filename  (format "%s-%s" date (file-name-nondirectory orgfile)))
               (temp-org-jekyll-directory (file-name-directory orgfile))
               (temp-postfile             (format "%s/%s" temp-org-jekyll-directory temp-org-jekyll-filename)))
          (with-temp-file temp-postfile                 ;; write temporary file updated with jekyll specifics
            (insert-file-contents orgfile)
            (goto-char (point-min))
            (insert (publish/to-yaml-header yaml-headers)))
          (org-publish-file temp-postfile (assoc blog-project org-publish-project-alist)) ;; publish the file with the right projects
          (delete-file temp-postfile))                  ;; remove the temporary file
      (message "This file is not an article, skip."))))

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

(provide 'org2jekyll)
;;; publish.el ends here
