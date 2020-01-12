---
title: Dark Mode and Accessibility with CSS
date: 2020-01-11
description: ""
draft: false
---

With the introduction of dark mode to most operating systems(Windows, MAC OS, IOS, Android) 
there has been a need to adapt our application to the users preferences, moreover to make
them more accessible by conforming to the settings that the users already predefined.
That's where the (new)media-query `prefers-color-scheme` comes in, it's aim is to allow us
to dynamically detect if the user prefers dark or light theme in his device so our 
applications can act accordingly.
The prefers-color-scheme media query has 3 options `no-preference`, `light`, and `dark`,
and here's how they work.
<!--
no-preference
    Indicates that the user has made no preference known to the system. This keyword value evaluates to false in the boolean context.
light
    Indicates that user has notified the system that they prefer an interface that has a light theme.
dark
    Indicates that user has notified the system that they prefer an interface that has a dark theme.
-->

```css
@media(prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
  /* update other styles */
}
```

The light mode allows us to detect whether the user prefers light over darkness,
and it works as follows

```css
@media(prefers-color-scheme: light) {

}
```
It's important to take into account that when we switch to dark mode we should also update the
text/box shadows, text colors, gradients and possibly the font being used.

The new kid in town is the `preferes-reduced-motion`, which can be used to detect if the user
prefers reduced montion, this can be the user's current configuration for many reasons one them
being the battery is low and the users wants to save it by disably animations or the user might
have some medical condition... 

The media query has two options, reduce and no-preference, in this case no-preference being that the
user has no preference over reduced motion or not and reduce being the option that specifies that he/she
does want reduced montion.

```css
@media(prefers-reduced-motion: reduce) {

}
```

<!-- no-preference
    Indicates that the user has made no preference known to the system.
reduce
    Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation, preferably to the point where all non-essential movement is removed.  -->

```css
@media (light-level: normal) {
  p {
    background: url("texture.jpg");
    color: #333;
}
```

```css
@media (light-level: dim) {
  p {
    background: url("texture.jpg");
    color: #333;
}
```

```css
@media (light-level: washed) {
  p {
    background: url("texture.jpg");
    color: #333;
}
```

```css
font-size: 10em;
```

<!-- @media (light-level: normal) {
  p {
    background: url("texture.jpg");
    color: #333;
  }
} -->

<!-- dim
    The device is used in a dim environment, where excessive contrast and brightness would be distracting or uncomfortable to the reader. For example: night time, or a dimly illuminated indoor environment.
normal
    The device is used in a environment with a light level in the ideal range for the screen, and which does not necessitate any particular adjustment.
washed
    The device is used in an exceptionally bright environment, causing the screen to be washed out and difficult to read. For example: bright daylight. 
-->
