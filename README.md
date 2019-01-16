# 🌱 plant.css

![Experimental](https://img.shields.io/badge/status-experimental-orange.svg)

Spend more time designing in the browser and less time
configuring.

**Note: this is just an idea right now. Feel free to make
issues/PRs to help refine it.**

## Concept

This could turn out to be horrible idea, but bear with me — we
can try it out and see if it goes anywhere. Yes, this is yet
another utility css toolkit. As a longtime user of functional
css here are some things I’ve noticed:

* Functional css is great.
* Utility generation is awesome (i.e. tools like
  `tachyons-generator` or Tailwind).
* Being able to customize your utility names to your own liking:
  even better.
* Do I need all the utilities that are generated: hard no — in
  fact never.
* So we use tools like purgecss to remove unused styles.

The basic concept:

> write HTML and add class names and plant will create the
> styles as you go.

Remember: potentially a bad idea. Plant will scan your documents
for classnames and match it with utilities it knows how to
create.

Also, let's add some intelligence: **plant will suggest
component extractions are you go.** Perhaps you keep using the
same classes together? Plant will notice and let you know.
Perhaps it will even let you know much bytes you will lose or
save if you do so.

A major goal with plant is that you set your design system (i.e.
colors, type scale, breakpoints, etc.), flavour of utility class
(I prefer Tachyons' terseness), and path to HTML/PHP, and then
you never need to configure it again.

Here are some fun names we can use for things:

* seed = utility
* flower = component

## Goals

For now the first goal is `0.1.0` a basic functioning example.

## Inspiration

* [Tachyons](https://github.com/tachyons-css/tachyons)
* [Tachyons Generator](https://github.com/tachyons-css/tachyons-generator)
* [Styled System](https://github.com/jxnblk/styled-system)
* [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)
* [Purgecss](https://github.com/FullHuman/purgecss)
* [CSS Blocks](https://github.com/linkedin/css-blocks)

## License

[MIT License](https://github.com/knowler/)
