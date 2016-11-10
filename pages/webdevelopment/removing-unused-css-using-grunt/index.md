---
layout: post
title: "Removing unused CSS using Grunt "
description: 
date: 2014-10-05 14:01:57 +0530
category: Webdevelopment
tags: [grunt,css]
coverimage : grunt-logo.png
---

If you aren't familiar with **Grunt**, it is a JavaScript task runner that you can use to automate pretty much anything in your development workflow. It works together with **Node.js** and there are tons of great plugins available.

<img src="grunt-logo.png" class="center" alt="" width="200" height="200">

In this post, I am going to run through the process of setting up **Node.js** on a Windows machine, installing **Grunt** and getting the **UnCSS** plugin running on a simple project. By the time you get to the end of this post, you should be able to automatically remove unused CSS from your stylesheets as well as minify them on the fly. You'll be pretty impressed with the results that we achieve!

## The Example Project

For this example, I am using a simple HTML page that uses the Twitter Bootstrap CSS as a template plus some custom CSS. The combined weight of the CSS files is **124 KB**.

## Installing Node.js

In order to get Grunt running on your machine, you will need to install [Node.js](http://nodejs.org/). Start by heading over to the [Node.js](http://nodejs.org/) website and download the latest distributable. It is easy to install and only takes a couple of minutes.

## Installing Grunt

Next up, you will need to install Grunt. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started guide](http://gruntjs.com/getting-started), as it is a useful guide to installing this and many other Grunt plugins. In order to install Grunt, fire up the Node.js command prompt that you have just installed. In the command prompt, type the following:

**npm install -g grunt-cli**

his will download and install Grunt for you - easy! Next, navigate to the folder that contains your source files that you wish to process. In my case, the command I type is:

**cd C:\Dev\ExampleProject**

With the Node.js command prompt still open, type in the following code:

**npm install grunt-uncss grunt-contrib-cssmin --save-dev**

This command will install the **UnCSS** package and the **CSSMin** package in your project folder. You will only need to do this the first time you configure your project. Before going any further, we need to create a **Grunt.js** file in the root of the project that we are working on. The **Gruntfile.js** is a valid JavaScript file that belongs in the root directory of your project. Think of it as a configuration file that you use to configure the different plugins, as well as the order that they run in. The **Gruntfile.js** should look something similar to the code below.

```JavaScript
module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'index.html', dest: 'cleancss/tidy.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'cleancss/tidy.css', dest: 'cleancss/tidy.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};
```

In the code above, I am configuring the **UnCSS** plugin to look at my index.html file, locate any CSS and spit out a version with all the unused CSS removed. The new CSS file will be created in a new folder called "cleancss". Next, the **CSSmin** plugin is configured to look at the clean CSS (**tidy.css**) and minify the file. Finally, in line 21 to 25, we load the two different plugins and register them.

All you need to do now is run Grunt.

## Remove that dirty CSS!

In the **Node.js** command prompt, navigate to the folder that contains your source files. This should also be the same folder that contains a **Gruntfile.js** with the configuration settings for the project.

<img src="running-grunt.gif" alt="Running Grunt and UnCSS - Node.js">

Once the files have been run through the plugins, the clean, minified CSS will be created in the folder that you specified in the gruntfile. The resulting CSS file that is created comes in at a tidy **5 KB**, making a saving of **119 KB**. That is a saving of over **95%**!

As you can see, a simple change using this tool can make a significant difference to your page load times. It's a great tool that is packed with useful plugins - it is definitely worth using it on your next project.

## Further Reading

Check out the other [great plugins](http://gruntjs.com/plugins) available for Grunt, as well as the [UnCSS project on Github](https://github.com/addyosmani/grunt-uncss). For another detailed installation guide - [try this link](http://xdamman.com/website-optimization-grunt-uncss). 