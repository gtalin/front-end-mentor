# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Your users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

The screenshot for desktop view:

![](./screenshot-desktop.png)

The screenshot for mobile view:

![](./screenshot-mobile.png)

### Links

- Solution URL: [Huddle landing page with single introductory section](https://github.com/gtalin/front-end-mentor/huddle-landing-page-single-section)
- Live Site URL: [Huddle landing page with single introductory section](https://gtalin.github.io/front-end-mentor/huddle-landing-page-single-section)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)
- CSS Flexbox
- CSS Grid

### What I learned

#### Fluid typography:

To implement fluid typography, we can use `clamp` in css.
For padding and margins as well we can use `clamp` or use `min` and `max`.
If we use properties like `clamp` for typography, then we don't need to specify a font size for different brakpoints. Also the transition of the fonts is quite smooth as the screen size increases instead of abruptly jumping from one font size to the next (As per the breakpoint).
Same goes for margins and paddings as well.

Some useful resources for the same are listed below in the useful resources section.


How we can implement `clamp` in [tailwind css](https://github.com/tailwindlabs/tailwindcss/discussions/2638)

Basically we extend the `fontSize` and `padding` that tailwindcss has defined. we do:

```js
f/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html', './src/*.{html,js}'],
  theme: {

    extend: {
      fontSize:{
        'dynamic-body': "clamp(1.00rem, 0.36vw + 0.93rem, 1.25rem)",
        'dynamic-heading': "clamp(1.5rem, 1.43vw + 1.21rem, 2.5rem)"
      },
      padding: {
        dynamic: "clamp(1.13rem, 5.54vw + 0.02rem, 5.00rem);"
      },
      width: {
        'dynamic-content': "clamp(10rem, 7.14vw + 8.57rem, 15.00rem);"
      },
      },
    },
  plugins: [],
}

```

**19/04/2023**

### Continued development

Would like to do more projects using tailwindcss. Would also like to focus more on accessibility.

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs/)
- [3 modern CSS techniques for responsive design](https://www.youtube.com/watch?v=VsNAuGkCpQU&t=604s) - this is a very informative video by Kevin Powell.
- https://css-tricks.com/simplified-fluid-typography/
- https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
- [Tailwind css clamp](https://github.com/tailwindlabs/tailwindcss/discussions/2638) - in a few cases I had used different font sizes for different screen sizes, I had used breakpoints. But this link shows how we can implement the same without using breakpoints.


## Author

- Website - [AJ](https://github.com/gtalin)
- Frontend Mentor - [@gtalin](https://www.frontendmentor.io/profile/gtalin)
- Twitter - [@gtalinn](https://twitter.com/gtalinn)

## Acknowledgments

Learned a lot from the several resources listed above.
