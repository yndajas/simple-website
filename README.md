# Simple website

A new, probably simpler website

## Vision

I'm trying to build this to be:

- more human, content-wise
  - written in conversational style, rather than self-publicist style
  - curated, not comprehensive
- very simple and undemanding on the client side
  - no JavaScript, or progressively enhanced (maybe a dark mode toggle
    eventually)
  - low resolution imagery, small amount of CSS
  - accessible to WCAG AAA standard where possible
- free of big frameworks on the development side, but still a playground for
  trying things
  - scripts to rule them all
  - GitHub actions
  - templating without JavaScript (DRY views with low tech)
  - local server with rebuild on file changes
  - linting and formatting
  - simple vanilla CSS styling
  - blog platform, soon

For now, it's just on github.io, but I'll probably replace my old Jekyll website
with this once I've migrated what little content I have on there over (mostly
blog posts)

## To do

- flesh out pages on writing and Japanese language resources
- possibly add a page on coding projects
- add Flatiron and CS50 to "Things that once were"
- add header navigation
- flesh out footer - contact links, licence etc
- refine style
- migrate blog posts and think about whether to support Markdown with
  compilation (and possibly a CMS)

## Running things locally

### Scripts

`script/setup`: wraps around `script/bootstrap` to install dependencies after
initial clone

`script/bootstrap`: installs dependencies

`script/update`: wraps around `script/bootstrap` to update dependencies

`script/build`: runs `script/update` then compiles the HTML and copies the
assets into the `_site` directory

`script/server`: runs `script/build` then starts the server and watches for
changes in the `assets` and `views` directories, rebuilding as needed

### Pages

New pages just need a `*.html` file in the `views` directory. The file should
contain `header` and `main` elements

### Layout

The layout, including the `head` and `footer`, can be updated in the
`views/layout` directory

### Images

All images are dithered using [Dither it!][1], except the one at the top of the
homepage, which is already lightweight. The dithering both reduces the file size
and provides a consistent aesthetic across images with very different origins

### Styles and colour palette

Styles go in `assets/styles/main.css`. Most of the spacing measurements are the
same, so there's a variable for that

The five-colour palette was created using Venngage's [accessible colour palette
generator][2] using a base colour taken from a theme on [Color Hunt][3]. It's
written with [OKLCH][4], because [apparently that's good][5]. I added an extra
colour for link styling in order to have reasonable contrast both with the
background and surrounding text. The base font colour is a seventh colour (or
non-colour): black

<!-- prettier-ignore-start -->
[1]: https://ditherit.com
[2]: https://venngage.com/tools/accessible-color-palette-generator#colorGenerator
[3]: https://colorhunt.co/palettes/pastel
[4]: https://oklch.com
[5]: https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
<!-- prettier-ignore-end -->
