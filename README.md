# nickbrombal.codes

<img src="https://img.shields.io/github/last-commit/nbrombal/nbrombal.github.io?style=for-the-badge">

Hey there! You've found the repo for [my personal CV website](https://nickbrombal.codes). Not what I would consider particularly exciting, but feel free to poke around.

The goal with this site is simply to have a living document where I can keep my relevant skills and work history available to prospective employers. Beyond that, it's an attempt at zen development, where I keep the project as minimal as possible: I utilize raw HTML and CSS where practical and only use what packages I feel are strictly necessary to make edits convenient and non-repetitive, rather than deploying an entire complicated build system and multiple dependencies to update. Sometimes it's nice to step back and appreciate where this whole Internet thing started.

To get in touch with me and learn a little more about my work, swing on over to [my LinkedIn profile](https://www.linkedin.com/in/nbrombal/). Always glad to meet new people.

## Fun Facts About This Site

Even a seemingly simple website can be full of surprises and challenges if you're open to learning new things. Here are a few of the interesting journeys and detours I've found myself on while creating and updating this one over the years.

- The site has automatic colour theming (i.e. light/dark mode) based on the user's operating system or browser preferences. This is handled via the [`prefers-color-scheme` CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
- All of the site's colours are managed using [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), allowing me to keep all of my colour declarations conveniently centralized at the top of the stylesheet.
- The site is optimized for printing using the `print` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) so I can quickly and easily provide a paper or PDF copy. Ensuring elements broke neatly across page breaks turned out to be a tricky process: I had to learn the hard way that even the newer [CSS paged media properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media) like [break-inside](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside) don't work within an element acting as a [flex container](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container).
- The site's design integrity and content flow should stay the same for users with alternative [`writing-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) and [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) preferences, such as those translating to Arabic or Japanese. This is because the sizing, spacing, and positioning of page elements are defined almost entirely using [logical CSS properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) rather than the traditional physical ones (e.g. `margin-block-start` instead of `margin-top`).
- The site's layout scales to accommodate users who browse with enlarged font sizes by declaring most sizing, spacing, and positioning properties using [relative length units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) like `em` instead of absolute ones like `px`.
- The site's original version was pure HTML/CSS with no dependencies, which was fun but terribly repetitive from a markup perspective. I've since re-engineered it to use [Eleventy](https://www.11ty.dev/) for static content generation, which lets me use simple loops and file inclusions in my HTML (via [Nunjucks templates](https://mozilla.github.io/nunjucks/)) to make it easier to maintain and update.
