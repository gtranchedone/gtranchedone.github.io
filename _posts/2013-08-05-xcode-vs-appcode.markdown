---
layout: post
date: 2013-08-05 09:00:00
title: "Why AppCode Is Still No Match for Xcode"

comments_enabled: true
categories: software-craftsmanship

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2013-08-05-xcode-vs-appcode/appcode_vs_xcode.png
featured_image_length: 423497
featured_image_width: 760

rss_description: "A comparison between Xcode and AppCode by JetBrains. In this post I argued that Xcode is the must go choice for any Cocoa(-Touch) developer."
---

_Edit (16 Feb 2015): A long time has passed since I originally wrote this post and I believe it can very well be considered out of date. As a matter of fact I’ve recently published a new post titled “[Why AppCode has become my IDE of choice]({% post_url 2015-02-16-appcode %})”._

A few months ago I heard about AppCode, an IDE (Integrated Development Environment) for Objective-C developed by the Czech software studio [JetBrains](http://www.jetbrains.com/). JetBrains is a well-known company in the software development community for their other IDEs (IntelliJ Idea for Java, PyCharm for Python, RubyMine for Ruby, etc.) and for their Continuous Integration products. Many Java developers favor JetBrains's IDE over Eclipse, especially since JetBrains released a 'Community Supported', and thus free, version of IntelliJ Idea. Moreover, Google recently partnered with the Czech company to create a dedicated IDE for Android, which is basically going to be a simplified version of IntelliJ: [Android Studio](http://ccbeans.me/179eTAk).

Fellow Cocoa(-Touch) developers, at least from what I could see or hear, are either uninterested or very excited about AppCode. As for myself, I've had mixed feelings about trying AppCode for development with Objective-C, but after having spent some time gathering more information about it, I've decided to give AppCode a try by taking advantage of the 30-days free trial being offered by JetBrains. I've used AppCode for the entire trial period now and I'd like to share my thoughts on it… and as I've spoiled from this post's title, I'm going to explain why I'm not going to use it anymore.

<!-- more -->

##Price

As you might have guessed by now, AppCode, as all other JetBrain's products, is a payed software. It's sold with a per-version licence for a premium of 99$ (76£ or 89€) for a personal licence. Students, teachers and no-profit institutions can get a licence for much less or entirely for free (but they need to apply for it). This kind of licence also implies that when a new version of the IDE gets published you'll get it for free if you purchased the full licence within the previous 12 months, otherwise you'll have to pay an extra 59$ (45£ or 53€) for each major update.

As a matter of fact, AppCode might get quite expensive for companies or small development studios with few employees and if you also use other JetBrains' products the overall cost is going to get quite high. Like many of you I honestly prefer Xcode for being free and available on the Mac App Store (which also means easy installation and updates). Xcode is thus the clear winner on this side. Moreover, all other Apple's amazing tools like Instruments or FileMerge come with Xcode and therefore are free as well.

##UI and Usability

AppCode is written in Java, reusing many components of other JetBrains' IDEs. Although perfectly understandable, this has the side effect of making AppCode slower than Xcode, especially if you compare it with the Xcode 5 Developer Preview (which is much faster and stable than Xcode 4). AppCode's slowness is especially noticeable when opening or creating a project.

Moreover, being build on top of the base for JetBrains' other cross-platform IDEs, AppCode's UI is all but native. It can feel very tight as it has lots of controls squeezed together around the code editor. The only nice feature is the availability of a 'TODO' tab that's automatically filled with the content of all comments starting with 'TODO:' (e.g. '// TODO: improve this bit of logic' would appear in this tab as a TODO item). AppCode also has tons of settings, which some people might appreciate, but it makes it very hard to understand what the IDE can do and how to properly customize it. The code editor itself also doesn't leave quite a nice experience when typing code compared with Xcode: it just doesn't feel right.

The biggest drawback for AppCode, however, is that it relies heavily on Xcode for much of what it can do. First and most of all, you've got to have Xcode installed on your machine in order for AppCode to function at all. AppCode, in fact, has to ask Xcode's folder structure for the available SDKs, project templates, and the iPhone Simulators. Moreover, editing XIBs, Storyboards, and Core Data Model files cannot be done in AppCode. Trying to open such files with AppCode will redirect you to Xcode. If you add to this the new fantastic features for images and game projects that Xcode 5 will support (which will be available though custom files formats in a visual editor), the gap in usability will become even larger (Xcode 5 is still in Developer Preview and under NDA, therefore I cannot fully talk about it yet).

Again Xcode is the clear winner on this side as well.

##Refactoring and Autocompletion

Despite all the above, the strongest point of AppCode is for sure it's refactoring feature set. JetBrains' IDEs have always been known for the extremely good support for refactoring and AppCode doesn't disappoint expectations in this area.

![App Code Method Generation](/images/posts/2013-08-05-xcode-vs-appcode/app_code-methods-generation.png)

There are so many refactoring features in AppCode it's impossible to cover them all in one post. Therefore I'm only going to mention my favourites:

* Creation of undeclared methods: if you're writing some code and decide you're going to wrap part of it in a new method, you can start calling that method and have AppCode create it for you.
* Creation of undeclared ivars and properties: just as for methods, you can use undeclared ivars and properties and have AppCode declare them for you.
* "CamelHumps" and "Middle Matching" autocompletion.
* Automatic Import and Import Optimisation: When you start using a class that is not yet imported, AppCode will suggest you to add the corresponding import automatically, or even add the import when you complete code. Moreover, with a number of code changes, some imports may become unused, these will be highlighted in the editor. To easily clean up your code, use Optimize Imports action that will remove unused, excessive and duplicating imports in your project.
* AppCode can automatically surround highlighted code in if/else, while, for statements and the like.
Refactoring is one of the key features of any decent IDE. Xcode only support some basic refactoring features and they not always work as they should. AppCode has without any doubt the best refactoring tools a developer could ever dream of. Xcode has still a long way to go on this.

##Unit Testing

AppCode does have support for Unit Testing. In fact it support both the OCUnit and Kiwi testing frameworks. I'm a bit disappointed, tough, that unlike the premium version of JetBrains' IntelliJ IDE for Java, AppCode doesn't seem to have a code coverage feature. That would have made the difference between AppCode and Xcode, for me at least, and would have probably made me use AppCode instead of Xcode, if not for everything else, but for unit testing at least.

As it is at the time of this writing I don't feel either Xcode or AppCode to be particularly superior to each other on this field but AppCode has a nice refactoring feature that allows to create a test class with just a couple of clicks from an existing class' interface or implementation file.

##Version Control

Also on the version control side, I feel I can give no more than a tie to both IDEs. They both support the most common used VCS like SVN and Git. I don't personally use this features neither in Xcode nor AppCode: I like to use the Terminal or dedicated tools like [SourceTree](https://www.atlassian.com/software/sourcetree/overview) to manage my repositories.

##General

Mixed Pros for AppCode:

* Highly customizable
* Has nice color schemes like the 'Darcula' one.

Mixed Cons for AppCode:

* AppCode's editor is quite clumsy with code indentation. Unlike Xcode, it doesn't keep you for jumping to any column in any editor's row. If you're only used to Xcode it will feel quite awkward to write code in AppCode at the beginning. If you use other JetBrains' IDEs though, code editing works just the same way as those other IDEs and you won't have any problem with it.
* Documentation looks better in Xcode and it's much more intuitive to have it pop in while writing or highlighting a method or class name.

##Conclusion

AppCode is generally a good IDE but the UI and performance are not ideal. Add to that the need to have Xcode installed on your machine and the lack of support for editing some key files like Storyboards and Core Data Models and you won't really have reasons not to use Xcode as your primary editor. Moreover, Instruments and other performance tuning tools are only available through Apple's IDE. **Why then use a different app if you're coming back to Xcode most of the time anyway?** Is some cool refactoring feature the only reason to switch? I definitely don't think so.

Some people also argue in favour of Xcode that all articles and tutorials on the web for Cocoa(-Touch) development use it - quite understandably - but I don't believe that is a real pro in favour of Xcode over any other editor. What I'd add to what I've already said, is that Apple is spending a great deal of effort on Xcode and we saw that both with Xcode 4 and, for those of you who could, with Xcode 5. I'm sure more has yet to come, especially in the Unit Testing and Continuous Integration areas. Moreover, any new feature that comes with it or with Objective-C itself, are under Apple's control, which gives you another reason to stick with their tools.

Those are the reasons why I don't believe I'll ever go back to AppCode again. If you have any thoughts on this argument I'd like to hear them in the comments below!