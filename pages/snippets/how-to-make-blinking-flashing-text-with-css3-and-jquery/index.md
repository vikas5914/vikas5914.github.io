---
layout: post
title: "How to make blinking/flashing text with CSS3 and jQuery"
description: How to make blinking/flashing text with CSS3 and jQuery 
date: 2014-10-27 17:54:00 +0530
category: Snippets
coverimage : js.jpg
---

Blinking text was one of the most dreaded homepage effects in the 90's. It was easily achieved by using the `<blink>` tag and was viewed upon as a real newbie thing to do. The `<blink>` tag is now a deprecated HTML element, but in the name of moving presentation/style to CSS3 and jQuery, there is now a way to achive it.

## Using CSS3

**CSS:**

```css
.blink_me {
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    -moz-animation-name: blinker;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;

    animation-name: blinker;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@-moz-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}
```

**HTML:**

```HTML
<span class="blink_me">This Will Blink</span>
```

<a href="http://jsfiddle.net/umz8t/328/" class="" target="_blank">Demo</a>

**This won't work on older versions of Internet Explorer, for that, you need to use jQuery.**

## Using jQuery

**Javascript:**

```JavaScript
function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
}

setInterval(blinker, 1000); //Runs every second
```

**HTML:**

```
<span class="blink_me">This Will Blink</span>
```

<a href="http://jsfiddle.net/umz8t/458/" class="" target="_blank">Demo</a>