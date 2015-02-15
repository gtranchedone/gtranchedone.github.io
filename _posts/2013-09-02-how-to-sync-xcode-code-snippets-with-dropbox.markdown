---
layout: post
date: 2013-09-02 09:00:00
title: "How to Sync Xcode Code Snippets via Dropbox"

comments_enabled: true
categories: productivity

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2013-09-02-how-to-sync-xcode-code-snippets-with-dropbox/dropbox_sync_xcode.png
featured_image_length: 319794
featured_image_width: 760

rss_description: "This post will teach you how to sync code snippets created with Xcode across all your Macs using Dropbox. The same process can be used to sync other data too."
---

*Disclaimer: This post is based on an answer on StackOverflow to the question “How Can One Transfer Xcode 4 Code Snippets From One Machine To Another?”. I've tried the following method myself and it works like magic. I'm also using it to sync Xcode's custom colour schemes and other user-specific data across my Macs.*

Xcode's Code Snippets are located in `~/Library/Developer/Xcode/UserData/CodeSnippets/`. If you want to have all your code snippets synchronised between multiple Macs, you can use Dropbox to do so.

<!-- more -->

##Creating Code Snippets

To create a code snippet in Xcode, you proceed as follows:

1. Write and select some code
2. Drag and drop your code in the snippet's section in Xcode

	![create custom code snippet in Xcode](/images/posts/2013-09-02-how-to-sync-xcode-code-snippets-with-dropbox/create_custom_code_snippet_xcode.png)

3. Replace variables with placeholders if appropriate. To do so, select the code you want to replace and substitute it with a description wrapped in brackets and hash-signs like so *<#yourDescription#>*.
4. Add name, a description and a shortcut

	![edit custom code snippet in Xcode](/images/posts/2013-09-02-how-to-sync-xcode-code-snippets-with-dropbox/edit_code_snippet_xcode.png)

You're done! Do the same for all of your snippets and keep reading once you're done or ready to synchronise. Any snippet created after you've set up Dropbox to sync your Xcode data will automatically be synced.

##Synchronising Code Snippets with Dropbox

To synchronise all your snippets using Dropbox, follow these steps:

1. Quit Xcode.
2. Move your CodeSnippets directory to your Dropbox. For example, let's say you moved them to `~/Dropbox/CodeSnippets`.
3. Let Dropbox upload them.
4. Pause Dropbox's syncing.
5. Move them back to where Xcode stores them.
6. Create a symbolic link into Dropbox: `ln -s ~/Library/Developer/Xcode/UserData/CodeSnippets ~/Dropbox/CodeSnippets`.
7. Resume Dropbox syncing.
8. Relaunch Xcode.

On your other computer:

1. Quit Xcode.
2. Let Dropbox download everything, if it hasn't yet.
3. Pause Dropbox syncing.
4. Remove your local Xcode user data: `rm -R ~/Library/Developer/Xcode/UserData/CodeSnippets`.
5. Move your UserData from Dropbox to Xcode: `mv ~/Dropbox/CodeSnippets ~/Library/Developer/Xcode/UserData/CodeSnippets`.
6. Create a symbolic link from your UserData to DropBox: `ln -s ~/Library/Developer/Xcode/UserData/CodeSnippets ~/Dropbox/CodeSnippets`.
7. Resume Dropbox syncing.
8. Relaunch Xcode.

The convolutions are necessary because Xcode will not follow a symlink, but Dropbox will. Dropbox will treat that symlink exactly as if the directory was actually there. This is not perfect; you will probably have to quit Xcode to have it recognise new snippets.

I sync my entire UserData directory, which gets me synchronised key bindings, named tabs, font & color schemes and code snippets. To do this, move and `ln ~/Library/Developer/Xcode/UserData` instead.