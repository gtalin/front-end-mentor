# Frontend Mentor - Products preview card component solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

The screenshot for desktop view:

![](./screenshot-desktop.png)

The screenshot for the mobile view:

![](./screenshot-mobile.png)

### Links

- Solution URL: [Products preview card](https://github.com/gtalin/front-end-mentor/intro-section-dropdown-nav)
- Live Site URL: [Products preview card](https://gtalin.github.io/front-end-mentor/intro-section-dropdown-nav)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)

### What I learned

In tailwind css if we want to change the property of some element based on hover for parent, we add `group` class to parent and then use something called `group-hover`.
Found it [here](https://stackoverflow.com/questions/65946335/how-to-make-parent-div-activate-styling-of-child-div-for-hover-and-active).

```html
<button class="group hover:text-neutral-black">
  Features
  <span
    aria-label="expand"
    class="inline-block w-3 h-1.5 bg-no-repeat bg-center bg-cover bg-arrow-down transition group-hover:bg-arrow-up group-focus:bg-arrow-up"
  ></span>
</button>
```

This property came in handy because we want to change the icon based on parent. It also came in handy for showing the `sub-menu` when we hover over it's parent.
Initially I was using `peer` class on `button` and then using `peer-hover` on the `sub-menu`. However as soon as we hover over the `sub-menu`, we're no longer hovering over the `button` hence the `sub-menu` disappears. So we need to use `group` class on `li` which is parent for the `button` as well as `sub-menu`. Using that, we can see the `sub-menu`.

As follows:

```html
<li class="group text-neutral-gray transition mr-4 text-sm relative">
  <button class="peer hover:text-neutral-black">
    Features
    <span
      aria-label="expand"
      class="inline-block w-3 h-1.5 bg-no-repeat bg-center bg-cover bg-arrow-down transition group-hover:bg-arrow-up "
    ></span>
  </button>
  <ul
    class="submenu absolute top-6 -left-10 space-y-3 bg-white p-4 rounded-xl shadow-2xl z-1 w-[150px] hidden opacity-0 group-hover:block group-hover:opacity-100"
  >
    <ul></ul>
  </ul>
</li>
```

The `sub-menu` is now visible even when we `hover` over it and remove `hover` from `button`. With `peer-hover`, the `submenu` disappeared as soon as we remove `hover` state from `button`.

The `submenu` is still not tabbable though. Need to resolve that next.

**Tabbable submenu**

Found [this](https://css-tricks.com/solved-with-css-dropdown-menus/) resource to make tabbable sub-menu.
We need to use the `focus-within` selector like so: `li:focus-within > ul`

We use it for arrow icon: `group-focus-within:bg-arrow-up` and then for `ul` as well. Like so `group-focus-within:block group-focus-within:opacity-100`.

**flex-grow**

In the header we have to use `flex-grow:1` on the `nav` because the parent `div` has the site logo and `nav` and when we apply `flex` to it, the children (ie. logo and nav) will [only be as wide as their contents](https://stackoverflow.com/questions/50455838/flexbox-not-full-width) and will align left. Which is not what we want. We want the `nav` to occupy full width and the 2 parts of the nav should be left aligned and right aligned respectively.

### Continued development

Would like to do more projects using tailwindcss.

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs/)
- [Group hover](https://stackoverflow.com/questions/65946335/how-to-make-parent-div-activate-styling-of-child-div-for-hover-and-active)
- [Tabbable dropdown menu](https://css-tricks.com/solved-with-css-dropdown-menus/)

## Author

- Website - [AJ](https://github.com/gtalin)
- Frontend Mentor - [@gtalin](https://www.frontendmentor.io/profile/gtalin)
- Twitter - [@gtalinn](https://twitter.com/gtalinn)

## Acknowledgments

Learned a lot from the several resources listed above.
