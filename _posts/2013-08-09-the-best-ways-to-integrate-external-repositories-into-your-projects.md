---
layout: post

title: "The best ways to integrate external repositories into your projects"
category: Software Craftsmanship
author: Gianluca Tranchedone

featured-image: posts/2013-08-09-the-best-ways-to-integrate-external-repositories-into-your-projects/cocoa_pods.png
featured-image-length: 370551
featured-image-width: 760

social-description: "This article introduces two technologies available to Cocoa(-Touch) developers to integrate external repositories in their project: Git Submodule and CocoaPods."
---

When I started using version control systems (VCS) a few years ago, I've searched for the best way to integrate external repositories into my own. At that time, everyone I knew was simply copying the contents of those repositories into their project and eventually maintain that code alongside their own, often without giving anything back when fixing bugs in opens source libraries. What I was looking for, instead, was a way to integrate such libraries so that it would be trivial to get updates or to contribute back to those projects; but most of all, I wanted to share reusable components across multiple projects in a way that allowed me to only maintain the shared code once and get updates everywhere instantly. It turns out that all the most used VCS support such think in a way or another, but, as you'll see by the time you finish reading this, there also are tools that do not strictly require a specific VCS in order to accomplish the same task.

<!-- more -->

The first version control system I've used has been SVN at my day-job. After few months, I discovered and started using Git for my side projects. SVN, although many companies still use it, has grown old, and I find Git to be much more incline to what a modern VCS should be. Therefore in this post I'm only going to cover Git, but, if you still use SVN, you should definitely check [SVN Externals](http://svnbook.red-bean.com/en/1.7/svn.advanced.externals.html) and the last part of this post where I talk about CocoaPods which you can use with SVN as well. However, nowadays Git is the most popular version control system thanks to its distributed nature and to services like [GitHub](https://github.com/) that make trivial to manage a Git repository, handle pull-requests, comments, issues, etc. Most companies now use Git, especially newly formed ones that have no previous set of data in other system to migrate to Git. Migrating to Git from SVN is actually easier than what you think, GitHub also provides a migration tool, for example. If you're still using SVN or Mercure you should definitely give Git a try. Jeff Kreeftmeiier wrote a nice article about [why you should use Git](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) and "The Git Guys" also wrote one about [why you should use Git instead of other VCS](http://www.gitguys.com/topics/why-use-git-instead-of-a-legacy-version-control-system/).

##Integrating other repositories into your own with Git Submodule

So, you're using Git and have projects that you want to integrate in one of your own. It doesn't really matter whether those projects belong to you or other developers: what matters is that they must also be stored in Git repositories. If this requirements are satisfied you're ready to integrate other repositories into your own using Git Submodule.

Git Submodule is a feature of Git that allows us to achieve what I've just described. What it does is simply to store a reference to external repositories in a file, keeping their trees apart from your own. This means that all changes to those trees can be fetched as usual using the command 'git pull'. Adding a submodule to your project is also trivial: you just have to type in the Terminal

	cd [your repository folder]
	git submodule add [repository url] [path where you want to store the submodule]

Git will clone the repository at the specified path and of course make it a submodule of your repository. You just need to execute a couple of other commands, namely

	git submodule update --init [path]

and optionally

	cd [the submodule folder]
	git checkout [branch]

So far so good, but Git Submodule is not all a bed of roses. Don't mistake me, it's a great tool, I've been using it in all the projects I've worked on for the past 3 years, and I'm still using it for most of them. Unfortunately, though, it comes with a couple of drawbacks:

* Removing a submodule is far from being a smooth operation: there's no such think as 'git submodule remove [path]', at least at the time of this writing.
* When cloning a repository containing submodules, Git doesn't automatically pull them too. This, though, can simply be solved by adding the recursive specifier to the pull command. Anyway, it still is a drawback to me as you need to know that the repository you're pulling has submodules and it's not really intuitive how to solve the problem.
* Adding and maintaining a submodule still requires some manual effort, which is proportional to the number of submodules you use.
* Maintaining trees of submodule dependencies (when you have submodules that have submodules that have submodules, etc.) can be tricky.
* Adding a submodule clones the current state of the repository but it doesn't actually checkout any branch by default. This seems weird (because it is :D) and that's why I've added a command to checkout a branch earlier when I explained how to add a submodule to your repository. You won't have problems with not having a branch checked out, but if you don't do it and you make changes to the submodule's content, some extra work is required to make things work well when committing the changes.

The good news is that tools like [SourceTree](https://www.atlassian.com/software/sourcetree/overview) make it easy to perform all of this operations and often automatically take care of part of them. But still, the whole procedure is far from ideal. For more details about Git Submodule check the official page in the [Git documentation](http://git-scm.com/book/en/Git-Tools-Submodules).

There also are a couple of alternatives to Git Submodule. One of the most appealing one is Git Subtree. Nicola Paolucci wrote an interesting article about [Git Subtree](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/) that you might want to check out.

##A better integration tool for Cocoa(-Touch) Developers: CocoaPods

Cocoa(-Touch) developers have an extra tool at their disposal to integrate other repositories into their own: [CocoaPods](http://cocoapods.org/). CocoaPods is a Ruby gem that aims to be "The best way to manage library dependencies in Objective-C", and it is! CocoaPods doesn't actually require the external projects to be stored into Git repositories, it should also work with other VCS. In a nutshell, what it does is getting a list of dependencies you specify in a file called "Podfile" (more about it later) and it generates a new Xcode project containing a static library out of each dependency and adds it to this new project; it then creates a Xcode workspace with your project and the libraries project. The command 'pod install' and the workspace will make the dependency between the two projects implicit. Repositories you can use as dependencies, called "pods", have to have a file in them with extension '.podspec' and they are usually be registered with CocoaPods. Most Open Source projects are available with CocoaPods, so you shouldn't worry about this at the moment. You can always contribute to unavailable Open Source projects and add a [podspec](http://docs.cocoapods.org/specification.html) file to them yourself. Moreover, CocoaPods also supports private pods. Check the [CocoaPods official website](http://cocoapods.org/) for more information.

~~In my last post I discussed why you should keep using Xcode and never move to AppCode; here's another reason: AppCode doesn't fully support workspaces and you cannot use CocoaPods with it.~~ (Edit: AppCode 2.5+ natively supports CocoaPods.)

This article doesn't want to be a comprehensive guide or tutorial on CocoaPods - a dedicated article may follow shortly, though - this is just an introduction to it written in order to discuss why you should consider using it in your projects. Therefore, just like I did with Git Submodule, I'm just going to briefly tell you how to install CocoaPods on your machine and how to add your first dependencies to your project. The same instructions can be found on the CocoaPods's home page.

To install CocoaPods, open the Terminal and type the following commands:

	[sudo] gem install cocoapods
	pod setup

Now, go to your project's folder and create an empty text file called 'Podfile' (the extension should be omitted, therefore it's better to simply write the command 'touch Podfile' in a Terminal window to create it). CocoaPods will use this file to know what dependencies to add/update/remove to/from your project. Now, open the Podfile and add the following text in it:

	platform :ios, '6.1'
	pod 'AFNetworking'
	pod 'MagicalRecord', '~> 2.1'

The first line of the file specifies the platform and version of your project. The second line specifies you want AFNetworking as a dependency. For AFNetworking, the latest available version will be used. The third line adds MagicalRecord as a second dependency, but in this case, using the specifier ~> followed by a version number, we told CocoaPods that we want that version of the dependency and all the minor updates. In our example, therefore, MagicalRecord 2.1 will be downloaded and all subsequent versions up to but not including version 3.0. This is particularly useful to prevent that a major update to a Pod brakes your code or otherwise requires a major maintenance effort. You can find more information about the structure of the Podfile and what are the possible attributes you can add to each Pod here.

Now, close the file and go back to the Terminal. We're done with the preparations and it's time to actually install our dependencies. Type the command

	pod install

This command tells CocoaPods to install all the dependencies contained in the Podfile. This command, as previously explained, will download the pods, create a project containing either a single library with all the dependencies or a single library for each of your dependencies, create or update an Xcode Workspace called as your project (e.g. 'MyProject.workspace) if needed, and add both your project and the CocoaPods project to it. If you previously had done this operation and modified the Podfile, any new dependency will be added and all the removed ones removed.

That's it, we're done. From now on, you should only use the workspace created by CocoaPods to work on your project.

##Working with Pods

One thing to notice is that pods usually come from repositories that were registered with CocoaPods (see the official documentation). What some may miss at first, but that might discover, soon is that not everything is on CocoaPods (yet :) ), especially internal libraries/components. What do you do when this happens? Can you still use CocoaPods for those? Of course you can! You just have to create a podspec for that library yourself! A podspec is a file where you specify information about a Pod. Once you've done that you add this new pod in your Podfile as follows:

pod 'MyLibrary', :podspec => 'config/pods/MyLibrary.podspec'
Another commonly asked question is how to integrate a local Pod in your project while still working on the Pod, or how to work on a local copy of a Pod. Well, CocoaPods got you covered for this situations as well with Local Pods! To add a Local Pod, you simply declare it in your Podfile as follows:

	pod 'MyPod', :path => '~/[some path]/MyPod/', :branch => 'develop'

##CocoaPods Recap

As you can see, CocoaPods has many advantages over Git Submodule:

* Maintaining dependencies is almost entirely automated. You only have to make the initial effort of creating a Podfile and later you just have to update it when needed, but as you saw, it's trivial to do it: each dependency is specified in just one line of text.
* You can use whatever VCS with it
* It's easy to add and remove dependencies
* Your dependencies are stored in a separate project from your main one
Although I haven't shown it in this post, you can also target dependencies to specific targets in your project (e.g. the unit tests bundle)

The only drawback is that if you want to make changes to a Pod you don't have the source for yet, you first need to clone the repository, then change your Podfile to make that Pod local, and only then you can start applying changes to the pod. Clearly this is a very small price compared to the gain you get from CocoaPods.

Despite what many people think, CocoaPods has largely passed the point where it could be still considered an experiment or an 'under-construction' product. The community around it is growing more and more everyday and most Open Source libraries support it. Actually, the most relevant ones, like MagicalRecord, AFNetworking and the like, are all advertising CocoaPods as the recommended installation method. The reasons for that are mostly described in this article.

Is CocoaPods problem-free then? Well… no. Although it has grown much in just a couple of years and although it's been supported almost full-time by many, CocoaPods is still young and the team behind it is discovering new usage patterns everyday. Moreover some known issues are reported on the project's page and will hopefully be fixed in the next versions. Normal usage, however should be error-free and everything should go smooth. If you encounter any problem with it, please report the issue to one of the team's members and they will hopefully also help you with it.

*Free Tip: a plugin for Xcode to help you with the basic usage of CocoaPods is available on [GitHub](https://github.com/kattrali/cocoapods-xcode-plugin?source=c).*

##Conclusion

Managing dependencies of your projects can be a daunting task and we should take advantage of all the tools at our disposal to make the job as easy as possible. Simply copying sources from project to project is just a waste of time and energy and you won't benefit from all the community or developer's support (or your own) to those sources if you don't have some sort of dependency management system that makes working on them project-independent.

If you're using Git, Git Submodule can be an invaluable ally when it comes to dependency management and it's definitely worth the effort, but if you're a Cocoa(-Touch) developer CocoaPods should become your best friend. It will save you a lot of time and make the whole process seamless. Both methods have their problems unfortunately but CocoaPods, being young and community supported, is most likely to get them fixed soon.

What's your opinion on that? How are you managing dependencies in your projects? Tell us in the comments below!