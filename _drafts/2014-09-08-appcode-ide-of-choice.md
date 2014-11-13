---
layout: post
date: 2014-09-08 09:00:00
title: "How AppCode has become my IDE of choice"

comments_enabled: true
categories: tools

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2014-09-08-appcode-ide-of-choice/post_banner.png
featured_image_length: 83218

rss_description: "Just over a year ago I wrote a post titled ‘Why AppCode is still no match for Xcode’. Now you might be reading this post’s title again to be sure you’ve read it right the first time. And yes, that’s right, nowadays I’m actually using AppCode as my main IDE for iOS and OS X applications. So, what’s changed since last year?"
---

Just over a year ago I wrote a post titled “[Why AppCode is still no match for Xcode](/blog/2013-08-05-xcode-vs-appcode)”. Now you might be reading this post’s title again to be sure you’ve read it right the first time. And yes, that’s right, nowadays I’m actually using AppCode as my main IDE for iOS and OS X applications. So, what’s changed since last year?

As friends and fellow developers have been telling me how great AppCode is, I’ve decided to give it yet one last try. My 30 days trial was well over already, so I’ve purchased a license, which has also been a good motivator to keep using JetBrain’s IDE without instantly turning back to Xcode. The choice to purchase the licence was also made easier by the fact that had AppCode just got a major update featuring a much nicer UI.

The transition from Xcode was quite painful for me at first but I’ve later come to really appreciate all of the features AppCode provides. The organisation and ease of use of Xcode are still superior to AppCode’s in my opinion, though. Moreover all the “Apple specific” features - like Storyboard, visual editor for Core Data Models, Xcode project settings, etc. - where either missing in AppCode altogether or their support is still very limited and poorly designed. Although there have been some great improvements lately - you can really tell the AppCode team at JetBrains have been working really hard on those features - the overall experience is not yet as good as it is in Xcode. And of course new features introduced by Apple (like all things Swift related or the new features in Xcode 6) take a while to be ported to AppCode.

## AppCode features I love



>AppCode makes you a far more productive developer

On the bright side, and that’s the whole reason why I switched to AppCode for most of my day-to-day programming activities, AppCode has amazing code editing and refactoring features. It makes you way more productive and way faster in writing or editing code. This is especially true once you learn a set of basic shortcuts:

!! Add list of shortcuts here !!

With all this and many more features it would be reductive to say that AppCode makes you a far more productive developer.

## What I don’t like

- **There’s no shortcut to let you run the test configuration while having the app configuration selected**.
Writing tests before any line of production code makes you confident that when you run the app, everything will be good. Sometimes, though, you need to actually run the app to check if everything also *looks* good.

- **Running tests for only one class or method creates a new build configuration**
Although BDD frameworks either don’t allow to run single tests or single test suites or if they do they do so by having you use  a special syntax, like a prefix, to be temporarily added to the test or suite you want to independently run, being able to select a single tests or suites can be some times very convenient. Suppose you have a test bundle that take 1 minute to run and you have a failing test. Being able to run that single test every time you make a change can save you a lot of time during the refactoring process. Xcode supports this features with XcodeTestKit and SenTestKit. It would be wise, in my opinion, to support it the same way.

## Conclusion

Nowadays I use AppCode almost exclusively to write code. I also have open the same project in Xcode, as you can safely do so. I use Xcode to create or make changes to Storyboard files, change build settings and anything else in the project file or edit my Core Data Model(s).