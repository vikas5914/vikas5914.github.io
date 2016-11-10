---
layout: post
title: "Lazy Load Image"
description: 
date: 2014-09-08 21:22:32 +0530
category: snippets 
tags: [javascript, jquery, lazy load, performance, plugin]
---

This plugin is very useful and it boosts performance delaying loading of images in long web pages because images outside of viewport (visible part of web page) won't be loaded until the user scrolls to them.

### Browser support

Compatible with All Browsers and IE7+.

### Usage

Use a placeholder image in the src attribute - something to be displayed while the original image loads - and include the actual image source in a "data-src" attribute.

If you want to serve high-resolution images to devices with retina displays, you just have to include the source for those images in a "data-src-retina" attribute.

```
<img src="bg.png" data-src="img1.jpg" />
<img src="bg.png" data-src="img2.jpg" data-src-retina="img2-retina.jpg" /> 
```

If you care about users without javascript enabled, you can include the original image inside a `<noscript>` tag:

```
<noscript>
  <img src="img1.jpg" />
</noscript>
```

Run the script on document ready:

```
$(document).ready(function() {
  $("img").unveil();
});
```

### Threshold

By default, images are only loaded and "unveiled" when the user scrolls to them and they became visible on the screen.

If you want your images to load earlier than that, lets say 200px before they appear on the screen, you just have to:

```
$("img").unveil(200);
```

### Callback

As a second parameter you can also specify a callback function that will fire after an image as been "unveiled".

Inside the callback function this refers to the image's DOM node, so with the help of CSS3 (or jQuery animations) and by attaching a simple load event you can easily add some fancy entrance animation to your images:

```css
img {
  opacity: 0;
  transition: opacity .3s ease-in;
} 
```

```javascript
$("img").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});
```

### Trigger

You can still trigger image loading whenever you need.

All you have to do is select the images you want to "unveil" and trigger the event:
```
$("img").trigger("unveil");
```

## Demo and Download

<a href="http://www.kapadiya.net/demo/lazy/" class="" target="_blank">Demo</a> <a href="http://www.kapadiya.net/demo/lazy/lazy.rar" class="" target="_blank">Download</a>