---
title: Headless Mode
date: 2020-01-08
description: ""
draft: false
---

if you've been on twitter or reddit you've probably hear of a "new" buzzword, Headless mode
or even headless chrome or purpetter, but what is headless mode and how can it be useful for you
as a developer? in this article I'm going to explain what is headless mode and what can you do now
with it.

## problem 1 - end to end testing or ui testing using javascript libraries

## server side rendering

on this article I'll focus only on chrome and firefox but it's worth to mention that
others browsers might have headless mode.

chrome allows you to use headless moede using the terminal or the purpetter which is a
npm library that's acts as an interface between the browser and the js code, we can try
a few things using the terminal but the real power is in using purpetter as it allows you
to access, dev tools, browser apis, it can virtually "everything" that a user can do on a
browser and using moder async await javascript.

on firefox you can experiment with headless mode by lauching it via terminal by using
--headless flag, which wi