---
layout: post
date: 2014-06-23 09:00:00
title: "Testing Code"

comments_enabled: true
categories: software-craftsmanship

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2014-06-23-testing-code/banner.png
featured_image_length: 239379
featured_image_width: 760

social_description: "Working with legacy code may be a daunting task. Michael Feathers in his 'Working Effectively with Legacy Code' gives a precise definition for it: '[...]legacy code is simply code without tests'. His book is a must read for every software engineer or aspiring one."
---
_Disclaimer: what follows are my personal opinions about testing code and test-driven development (TDD). The definitions I give in this post are my personal interpretation of this concepts. I'm not trying to start yet another infinite discussion about this topics, however, I'd like to hear from you in the comments. One last note: this is a long article._

I've been familiar with the concept of testing code for a long time now but, as many fellow developers, I've not regularly written tests for most of my career. That has recently changed. Nowadays I almost exclusively[^The only exception I’ve made so far has been fixing a few bugs the last two days before a tight deadline for submitting an update to Lowdown to Apple. In that case, the code I had to fix wasn’t already under test and the time required to make it testable would have made me miss the deadline, which isn’t great.] write code test-first. Most people find that quite a challenging thing to do. The 'believers', those that actually try to get into the habit of regularly writing tests, find it hard to stick with this practice, to make it an habit. Therefore, once of the reasons I'm writing this post is to explain why I got into testing and how I got stuck on it.

<!-- more -->

I've been thinking of writing this post for a long while. I finally decided to actually do it after having seen the reactions to the recent discussion "[Is TDD dead?](https://plus.google.com/events/ci2g23mk0lh9too9bgbp3rbut0k)" hosted on Google Hangouts by [Thought Works](www.thoughtworks.com) participated Kent Beck, Martin Fowler and David Heinemeier Hannson. For those who don't know them, Kent Beck and Martin Fowler are the authors of most of the literature on testing code.

In fact, I believe I've always perfectly understood what testing and test-driven development really meant, how it was supposed to be done and why you should do it. Then I saw that discussion and the reactions it produced from the followers and I though to myself "How can such a simple set of ideas be misinterpreted like that!" Of course everybody has his/her unique view of the world and everybody has his/her own background and habits. Everybody has a unique interpretation of some things, especially good ones.

Therefore, to start with, I want to give _my own_ definitions of some key concepts and discuss them along the way.

##A simple, yet powerful concept

Testing code is a very simple idea that's been around for the last 15 years already. In its essence tests are snippets of code that exercise some behaviour in your system. This are organised in test suites - a collection of tests - that can be manually or automatically run by developers to make sure everything is working as expected, without the necessity of manually testing the software[^Manually testing software is still an invaluable part of the development process. Tests can have bugs too!].

>Tests are snippets of code meant to exercise the behaviour of a small section in a software system to ensure that its functionality remains unchanged as you modify it to, for example, make performance improvements or fix bugs.

It’s easy to understand why this is useful. …

##All tests are Unit Tests

Different people might classify tests in different ways. You may have heard words like *unit tests*, *integration tests*, *system tests*, *logic tests*, *application tests*, and so on.

The truth is, though, that all tests are ultimately exercising units of code and what all this words refer to is, simply put, the level of abstraction and how many units you're considering in each test.

###Unit Tests

Canonically, a unit of code is the smallest testable component of your code — for example, a method in a class or a set of methods that accomplish an essential purpose. Hence, a unit test is one that sets some expectations for how a unit should behave.

{% highlight objc %}
// Sample tests for a Person class in Objective-C
// The XCTAssert… macros are defined in XCTests.framework
- (void)testDesignatedInitializerThrowsExceptionWhenNoNameIsPassed
{
     XCTAssertThrows(Person *person = [[Person alloc] initWithName:nil], @"An exception should be thrown if somebody tries to initialise a person without a name");
}

- (void)testDesignatedInitializerReturnsNewPersonWithPassesInName
{
     Person *person = [[Person alloc] initWithName:@"Gianluca"];
     XCTAssertEqualObjects(person.name, @"Gianluca", @“A person should be initialised with the passed-in name");
}
{% endhighlight %}

This examples are pretty basic, but you get the idea. Each method or function has it's own set of unit tests that assert what the expected behavior is given some input. Ideally each scenario will be considered by one test only and all possible scenarios will be under test when you're done.

###Integration Tests

Now, testing units in isolation is always a great idea, but isn't often enough. Classes that perform all work themselves are fairly rare, especially in large systems. Therefore, to test such classes what you really are testing are multiple units at once. Such tests are called "integration tests".

>An integration test aims to exercise how a two or more units interact with each other in a given context.

[sample code]

###Regression Tests

Some people also like to categorise regression tests as its own category. I disagree. A regression test in one written in order to prevent or solve a regression - that is, to prevent or fix a bug. When a (potential) bug is discovered you write a test that exercises the code that needs fixing. Then you solve the issue, making the test pass. This avoids the possibility of the problem being re-introduced later on during development.

A regression test can exercise the behaviour of one or more units in a given context. Hence, I’d argue, there’s no such thing as regression tests. To me, this name only indicates the conditions that led to the creation of the test or the time when it was created: "we found a bug. now it’s fixed and we can prove it by running this test(s)."

###Application and Logical Tests

When

##Test-Driven Development

You all should know that I'm quite fond of Apple's documentation already, so I'll quote the definition of TDD from the [Xcode Unit Testing Guide](https://developer.apple.com/library/ios/#documentation/DeveloperTools/Conceptual/UnitTesting/01-Unit-Test_Overview/overview.html) :smile:

>[Test-Driven Development] is a style of writing code in which you write test cases before writing the code to be tested. This development approach lets you codify requirements and edge cases for your code before you get down to writing it. After writing the test cases, you develop your algorithms with the aim of passing your test cases. After your code passes the test cases, you have a foundation upon which you can make improvements to your code, with confidence that any changes to the expected behavior (which would result in bugs in your product) are identified the next time you run the tests.

##The cost of testing

…

##When I finally decided to use TDD daily

My turning point was…

I only have one exception…

##F.A.Q.s

To conclude, I thought I'd answer some of the questions I had when I first started writing tests, at least those that I found being quite common searching the web.

###Is TDD for me?

…

###Do I need to test everything?

…

###How do I test what my code does when it connects to the network?

…

###How do I test asynchronous code?

…

###How do I test private methods?

…