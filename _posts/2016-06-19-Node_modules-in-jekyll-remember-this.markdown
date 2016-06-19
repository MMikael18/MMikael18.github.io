---
layout: post
title:  "Node_modules and Jekyll"
date:   2016-06-19 10:35:00 +0300
categories: jekyll TIP
---

So. I added Bootstrap my project using node. Next two day i used to try find why my Jekyll server use 30-60 seconds to regenating changes.

Do not forget [configuration][jekyll-docs] in you _config.yml!
{% highlight ruby %}
exclude: [node_modules]
{% endhighlight %}

[jekyll-docs]: https://jekyllrb.com/docs/configuration/