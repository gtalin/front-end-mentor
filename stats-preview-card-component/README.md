# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

I am learning Tailwind CSS so built this using tailwind css.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
-

### Screenshot

The screenshot for desktop view:

![](./screenshot-desktop.png)

The screenshot for mobile view:

![](./screenshot-mobile.png)

### Links

- Solution URL: [3 column preview card](https://github.com/gtalin/front-end-mentor/stats-preview-card-component)
- Live Site URL: [3 column preview card](https://gtalin.github.io/front-end-mentor/stats-preview-card-component)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)
- CSS Flexbox
- CSS Grid

### What I learned

**todo**

### Image with colour overlay

- One method is by using image

```html
<header class="w-full h-[50vh] bg-primary-blue overflow-hidden">
  <picture>
    <source
      media="(max-width: 375px)"
      srcset="./build/img/image-header-mobile.jpg"
    />
    <source
      media="(min-width: 376px)"
      srcset="./build/img/image-header-desktop.jpg"
    />
    <img src="./build/img/image-header-desktop.jpg" alt="" class="opacity-50" />
  </picture>
</header>
```

- 2nd method is by using as background image and linear gradient

```html
<div
  class="bg-primary-blue bg-header-img-mobile bg-no-repeat bg-top bg-cover h-[50vh] w-full"
></div>
```

The `bg-primary-blue` class added is as a backup in case the linear gradient does not work.

### Continued development

Would like to do more projects using tailwindcss. Would also like to focus more on accessibility.

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs/)
- [Color overlay for background image](https://stackoverflow.com/questions/36679649/how-to-add-a-color-overlay-to-a-background-image) and [another link](https://stackoverflow.com/questions/18815157/how-to-overlay-image-with-color-in-css)
- [CSS overlay](https://www.w3schools.com/howto/howto_css_overlay.asp)
- [Image overlay](https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio)

## Author

- Website - [AJ](https://github.com/gtalin)
- Frontend Mentor - [@gtalin](https://www.frontendmentor.io/profile/gtalin)
- Twitter - [@gtalinn](https://twitter.com/gtalinn)

## Acknowledgments

Learned a lot from the several resources listed above.
