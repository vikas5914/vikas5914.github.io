---
layout: post
title: "Install Jekyll on Windows"
description: 
headline: 
date: 2014-08-12 16:26:02 +0530
category: Webdevelopment
tags: [jekyll,ruby,windows]
---

<figure>
	<img src="jekyll.jpg">
</figure>

## The Easy Method

The easy way is to download [Railsinstaller](http://railsinstaller.org/). It sets up ruby, rails, bundler and other packages in <code>C:\Railsinstaller.</code> (Note: since I already have <code>git</code> installed elsewhere, I unchecked the install dialog box for <code>git</code> and <code>ssh</code>.) 

Once you’ve got Railsinstaller up and running, open powershell/cmd/gitshell and run:

```
cd C:/Railsinstaller 
gem install jekyll
```

## Advance Method

### Install Ruby

* Go to [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)

* In “RubyInstallers” section, click a version to download.
For example, Ruby 2.0.0-p451 (x64) is the Windows installer for Ruby 2.0.0 x64 on 64-bit machines.

* Install through the installer
	* Keep the default directory <code>C:\Ruby200-x64</code> if possible, please note installer advises that “Please avoid any folder name that contains spaces (e.g. Program Files).”
	* Tick “Add Ruby executables to your PATH” checkbox, so PATH will be updated automatically to avoid headaches.
	<figure><img src="ruby.png"></figure>

* Open up a command prompt window and type in the following command, to see if Ruby has been install correctly or not.

   >ruby -v

   Example output:

   >ruby 2.1.2p95 (2014-05-08 revision 45877) [x86_64-darwin13.0]

### Install DevKit

The DevKit is a toolkit that makes it easy to build and use native C/C++ extensions such as RDiscount and RedCloth for Ruby on Windows. Detailed installation instructions can be found on its [wiki page](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#installation-instructions).

* Go to [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/) again.

* Download "DEVELOPMENT KIT" installer that matches the Windows architecture and the Ruby version just installed.
For instance, DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe is for 64-bit Windows with Ruby 2.0.0 x64.
Here is a list about how to choose the correct DevKit version:

> **Ruby 1.8.6 to 1.9.3**: DevKit tdm-32-4.5.2<br />
> **Ruby 2.0.0**: DevKit mingw64-32-4.7.2<br />
> **Ruby 2.0.0 x64**: DevKit mingw64-64-4.7.2

* Run the installer and extract it to a folder, e.g. `C:\DevKit`.

> cd “C:\DevKit”
> ruby dk.rb init
> notepad config.yml

* In opened notepad window, add a new line - `C:\Ruby200-x64` at the end, save and close.

* Back to the Command Prompt, review (optional) and install.

>ruby dk.rb review
>ruby dk.rb install

### Install Jekyll

* Verify that gem has been installed properly

>gem -v

Example output:

>2.0.14

* Install Jekyll gem

>gem install jekyll

### Install Pygments

The default syntax highlighting engine in Jekyll is Pygments. It requires Python to be installed and highlighter field to be set to pygments in site’s configuration file _config.yml.

Recently, Jekyll has added another highlighting engine called Rouge, which doesn’t support as many languages as Pygments at the moment, but it’s Ruby native and Python-free. More details can be followed here.

#### Install Python

1. Go to [http://www.python.org/download/](http://www.python.org/download/)
2. Download appropriate version of Python windows installer, e.g. **Python 2.7.6 Windows Installer**. Note that Python 2 is preferred since Python 3 might not be functioning as intended at the time of writing.
3. Install
4. Set the installation directory (e.g. C:\Python27) to PATH. (How to? See [Troubleshooting #1](#troubleshooting))
5. Verify Python installation

> python \--version

Example output:

> Python 2.7.6

#### Install pip

* Download [get-pip.py](https://bootstrap.pypa.io/get-pip.py) via the link on that site.
* Next, open your favorite command line tool and navigate to the location of get-pip.py on your computer (e.g., `C:\pip\ `or whatever folder you saved it into).

>cd C:\pip

* Then, run the following command to automagically download and install all required components.

>python get-pip.py

#### Install Pygments

* From the command line, run the following command to install the Python base of Pygments. 

>python -m pip install Pygments

## Start Jekyll

Following the commands on official [Jekyll Quick-start guide](http://jekyllrb.com/docs/quickstart/), a new Jekyll blog should be created and can be browsed at [localhost:4000](http://localhost:4000/).

>jekyll new myblog
>cd myblog
>jekyll serve

## Troubleshooting

### Error message:

>python is not recognized as an internal or external command, operable program or batch file.

**Alternatives**: “python” here can also be “ruby”, “gem” or “easy_install”, etc.

**Reason**: Program is not properly installed, or the PATH has not been set correctly.

**Solution**: Ensure the program has been installed correctly. Then add it to the PATH manually, see [this link](http://stackoverflow.com/questions/6318156/adding-python-path-on-windows-7/6318188#6318188).

### Error message:

>ERROR:  Error installing jekyll:
>ERROR: Failed to build gem native extension.
>"C:/Program Files/Ruby/Ruby200-x64/bin/ruby.exe" extconf.rb

**Reason**: Ruby has been installed to a folder with spaces.

**Solution**: Re-install Ruby, but this time install it to a folder without spaces, or simply keep the default directory when installing.

### Error message:

>Generating... Liquid Exception: No such file or directory - python c:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/pygments.rb-0.4.2/lib/pygments/mentos.py in 2013-04-22-hello-world.md

**Reason**: Pygments is not properly installed or the PATH is yet to be effective.

**Solution**: First make sure Pygments has been installed and PATH for Python is correct without no spaces or trailing slash. Then restart Command Prompt. If it’s not working, try logout Windows and log back in again. Or even try the ultimate and most powerful solution - “turning the computer off and on again”.

### Error message:

>Generating... Liquid Exception: No such file or directory - /bin/sh in _posts/2013-04-22-hello-world.md

**Reason**: Incompatibility issue with pygments.rb versions 0.5.1/0.5.2.

**Solution**: Downgrade pygments.rb gem from 0.5.1/0.5.2 to version 0.5.0.

>gem uninstall pygments.rb --version 0.5.2
>gem install pygments.rb --version 0.5.0

### Error message:

>c:/Ruby200-x64/lib/ruby/site_ruby/2.0.0/rubygems/core_ext/kernel_require.rb:55:in `require': cannot load such file -- wdm (LoadError)

**Reason**: wdm gem could not be found. Since Jekyll only supports *nix systems officially, Windows Directory Monitor is therefore not included among Jekyll dependencies.

**Solution**:

>gem install wdm
