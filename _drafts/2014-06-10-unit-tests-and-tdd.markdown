---
layout: post
date: 2014-06-03 09:00:00
title: "Unit Tests and Test Driven Development"

comments_enabled: true
categories: software-craftsmanship

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2014-06-10-unit-tests-and-tdd/banner.png
featured_image_length: 62470
featured_image_width: 760

rss_description: "Working with legacy code may be a daunting task. Michael Feathers in his 'Working Effectively with Legacy Code' gives a precise definition for it: '[...]legacy code is simply code without tests'. His book is a must read for every software engineer or aspiring one."
---
Every developer with a decent amount of work history has at least once experienced the feeling that, no matter how hard one has been working to produce high-quality software - blame the raising pressure to deliver quickly, changing requirements, or whatever - the project he/she's been working on got full of tiny little annoying bugs. Or worse, one works hard to get a new feature implemented only to discover that something got broken in the process.

That’s happened to me quite a few times and I found myself working on the same stuff over and over, for way longer than what I expected or wished to. It's a really frustrating experience.

How do you fix that? How can you make sure to be writing code that works and that’s not breaking anything else in the system? Well, it turns out that for quite some time now, people have been writing automated tests for their code. Tests that you can run every time you like to check the integrity of your system or, better yet, that can *also* automatically be run for you by some Continuous Integration system (like [Jenkins](http://jenkins-ci.org) or [Travis](http://travis-ci.org)). That’s called **Unit Testing**.

As many of my fellow developers, I’ve been acquainted with this concept for quite some time, but never got into the habit of actually writing tests for my code… at least until a few weeks ago.

<!-- more -->

##The Turn Point

>Unit-testing lets you specify behavior that your code must exhibit to ensure that its functionality remains unchanged as you modify it to, for example, make performance improvements or fix bugs. A unit of code is the smallest testable component of your code—for example, a method in a class or a set of methods that accomplish an essential purpose. A test case exercises a unit of code in a specific way; if the result of the test is different from the expected result, the test case fails. A test suite is made up of a set of test cases. You can develop one or more test suites to test different aspects of your code.
>
>Unit tests are the basis of test-driven development, which is a style of writing code in which you write test cases before writing the code to be tested. This development approach lets you codify requirements and edge cases for your code before you get down to writing it. After writing the test cases, you develop your algorithms with the aim of passing your test cases. After your code passes the test cases, you have a foundation upon which you can make improvements to your code, with confidence that any changes to the expected behavior (which would result in bugs in your product) are identified the next time you run the tests.
>
>Even when not using test-driven development, unit tests can help reduce the introduction of bugs in your code. You can incorporate unit-testing in a working app to ensure that future changes don’t modify the app’s behavior. As you fix bugs, you can add test cases that confirm that the bugs are fixed. However, adding unit tests to a project that’s not designed with unit-testing in mind may require redesigning or refactoring parts of the code to make them testable.
>
> <span class="quote_author"><a href="https://developer.apple.com/library/ios/#documentation/DeveloperTools/Conceptual/UnitTesting/01-Unit-Test_Overview/overview.html">—Xcode Unit Testing Guide</a></span>