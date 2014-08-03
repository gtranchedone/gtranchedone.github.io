---
layout: post
date: 2014-05-11 18:00:00
title: "Welcome to Jekyll!"

comments_enabled: true
categories: software-craftsmanship

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: 2014-04-25-welcome-to-jekyll/banner.png
featured_image_length: 62470
featured_image_width: 249

social_description: "Working with legacy code may be a daunting task. Michael Feathers in his 'Working Effectively with Legacy Code' gives a precise definition for it: '[...]legacy code is simply code without tests'. His book is a must read for every software engineer or aspiring one."
---
According to the Swift Programming Language book:

>You can use both classes and structures to define custom data types to use as the building blocks of your program’s code.
>
>However, structure instances are always passed by value, and class instances are always passed by reference. This means that they are suited to different kinds of tasks. As you consider the data constructs and functionality that you need for a project, decide whether each data construct should be defined as a class or as a structure.
>
>As a general guideline, consider creating a structure when one or more of these conditions apply:

>* The structure’s primary purpose is to encapsulate a few relatively simple data values.
* It is reasonable to expect that the encapsulated values will be copied rather than referenced when you assign or pass around an instance of that structure.
* Any properties stored by the structure are themselves value types, which would also be expected to be copied rather than referenced.
* The structure does not need to inherit properties or behavior from another existing type.

>Examples of good candidates for structures include:

>* The size of a geometric shape, perhaps encapsulating a width property and a height property, both of type Double.
* A way to refer to ranges within a series, perhaps encapsulating a start property and a length property, both of type Int.
* A point in a 3D coordinate system, perhaps encapsulating x, y and z properties, each of type Double.

>In all other cases, define a class, and create instances of that class to be managed and passed by reference. In practice, this means that most custom data constructs should be classes, not structures.