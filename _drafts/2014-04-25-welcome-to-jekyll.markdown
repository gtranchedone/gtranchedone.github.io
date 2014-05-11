---
layout: post
date: 2014-05-11 18:00:00
title: "Working with Legacy Code"

comments_enabled: true
categories: software-craftsmanship

author: Gianluca Tranchedone
author_url: https://plus.google.com/u/1/+GianlucaTranchedone

featured_image: /images/legacy-code-banner.png
featured_image_length: 62470

rss_description: "Working with legacy code may be a daunting task. Michael Feathers in his 'Working Effectively with Legacy Code' gives a precise definition for it: '[...]legacy code is simply code without tests'. His book is a must read for every software engineer or aspiring one."
---

Every software engineer feels a sense disgust when hearing the words *legacy code*. Strictly speaking legacy code it's code you "inherit" from someone else, however, the term is more broadly used to indicate a piece of software that's no longer maintained. Often it's code that, although deprecated, is still in use because of dependencies spread across a large system. Anyway, Michael Feathers has a better definition:

<!-- more -->

>To me, <em>legacy code</em> is simply code without tests. I've gotten some grief for this definition. What do tests have to do with whether code is bad? To me, the answer is straightforward, and it is a point that I elaborate throughout the book:

><em>Code without tests is bad code. It doesn't matter how well written it is; it doesn't matter how pretty or object-oriented or well-encapsulated it is. With tests, we can change the bahavior or our code quickly and verifiably. Without them, we really don't know if our code is getting better or worse.</em>

>You might think that this is severe. What about clean code? If a code base is very clean and well structured, isn't that enough? Well, make no mistake. I love clean code. I love it more than most people I know, but while clean code is good, it's not enough. Teams take serious chances when they try to make large changes without tests. It is like doing aerial gymnastic without a net. It requires incredible skill and a clear understanding of what can happen at every step. Knowing precisely what will happen if you change a couple of variables is often like knowing whether another gymnast is going to catch your arms after you come out of a somersault.


I wish I had read Michael Feathers' [Effectively Working with Legacy Code](http://www.amazon.co.uk/gp/product/B005OYHF0A/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B005OYHF0A&linkCode=as2&tag=gtranchedone-21) when I first started programming. I've had it on my Amazon wish-list for a long time. One day I've purchased the book but I've committed the sin of not reading it until just a few days ago. **If you are - or want to be - a software engineer you absolutely have to read this book now! [Go get it!](http://www.amazon.co.uk/gp/product/B005OYHF0A/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B005OYHF0A&linkCode=as2&tag=gtranchedone-21)**

## Jekyll

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

## Lists

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

* Item 1
* Item 2

1. Item 1
2. Item 2

## Quoted Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque metus enim. Praesent risus ligula, molestie sit amet nulla sed, posuere scelerisque lectus. In dignissim, enim a scelerisque mattis, erat est mollis tellus, eu scelerisque dolor orci convallis nibh. Sed id porttitor est, rhoncus gravida libero. Quisque commodo nec arcu a elementum. Suspendisse eleifend a mi quis laoreet. Aenean elementum auctor varius. Curabitur elementum enim non nisl hendrerit, dictum dignissim nisl pulvinar.

>Lorem [ipsum](/) dolor sit amet, consectetur adipiscing elit. Integer pellentesque metus enim. Praesent risus ligula, molestie sit amet nulla sed, posuere scelerisque lectus. In dignissim, enim a scelerisque mattis, erat est mollis tellus, eu scelerisque dolor orci convallis nibh. Sed id porttitor est, rhoncus gravida libero. Quisque commodo nec arcu a elementum. Suspendisse eleifend a mi quis laoreet. Aenean elementum auctor varius. Curabitur elementum enim non nisl hendrerit, dictum dignissim nisl pulvinar.
>>Lorem [ipsum](/) dolor sit amet, consectetur adipiscing elit. Integer pellentesque metus enim. Praesent risus ligula, molestie sit amet nulla sed, posuere scelerisque lectus. In dignissim, enim a scelerisque mattis, erat est mollis tellus, eu scelerisque dolor orci convallis nibh. Sed id porttitor est, rhoncus gravida libero. Quisque commodo nec arcu a elementum. Suspendisse eleifend a mi quis laoreet. Aenean elementum auctor varius. Curabitur elementum enim non nisl hendrerit, dictum dignissim nisl pulvinar.

Aenean tincidunt eros erat. Nam elit sem, porta vel tempor imperdiet, commodo ac mauris. Quisque dapibus eleifend mi, id ultricies magna tincidunt eu. Aliquam nec eros imperdiet, sollicitudin metus non, sodales nisl. Morbi sit amet lobortis leo. Nullam cursus tortor non lacus vulputate hendrerit. Aliquam sollicitudin quis enim nec sodales. Quisque nec sollicitudin quam. Nullam diam ipsum, cursus luctus sollicitudin sed, ullamcorper laoreet urna. Vestibulum nec suscipit nulla.

## Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque metus enim. Praesent risus ligula, molestie sit amet nulla sed, posuere scelerisque lectus. In dignissim, enim a scelerisque mattis, erat est mollis tellus, eu scelerisque dolor orci convallis nibh. Sed id porttitor est, rhoncus gravida libero. Quisque commodo nec arcu a elementum. Suspendisse eleifend a mi quis laoreet. Aenean elementum auctor varius. Curabitur elementum enim non nisl hendrerit, dictum dignissim nisl pulvinar.

Aenean tincidunt eros erat. Nam elit sem, porta vel tempor imperdiet, commodo ac mauris. Quisque dapibus eleifend mi, id ultricies magna tincidunt eu. Aliquam nec eros imperdiet, sollicitudin metus non, sodales nisl. Morbi sit amet lobortis leo. Nullam cursus tortor non lacus vulputate hendrerit. Aliquam sollicitudin quis enim nec sodales. Quisque nec sollicitudin quam. Nullam diam ipsum, cursus luctus sollicitudin sed, ullamcorper laoreet urna. Vestibulum nec suscipit nulla.

<p class="post_image_group">
	<img src="http://www.gravatar.com/avatar/2b98c09b232d45d7b03fd6804ed23e40?s=240" />
	<img src="http://www.gravatar.com/avatar/1bb1f1e4b25c5b64a664394b34f7ad96?s=240" />
</p>

Quisque aliquet tellus et mauris euismod, volutpat mattis mauris posuere. Quisque tempor nulla nec tellus hendrerit rhoncus. Aenean lorem leo, viverra et aliquet nec, adipiscing eget magna. Nam eu adipiscing urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis pulvinar diam, ac imperdiet quam. Integer vitae erat at tellus suscipit viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
