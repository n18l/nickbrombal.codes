# nickbrombal.codes

<img src="https://img.shields.io/tokei/lines/github/nbrombal/nbrombal.github.io?style=for-the-badge"> <img src="https://img.shields.io/github/last-commit/nbrombal/nbrombal.github.io?style=for-the-badge">

Hey there! You've found the repo for [my personal CV website](https://nickbrombal.codes). I can't pretend it's particularly exciting, but feel free to poke around.

The goal with this site, as you can probably guess, is to have a living document where I can keep my relevant skills and work history available to prospective employers. Beyond that, I've simply attempted to keep the project as minimal as possible, utilizing raw HTML and CSS rather than introducing an entire build pipeline and complicated dependency tree. Sometimes it's nice to get back to the basics and remember where this whole internet thing started.

To get in touch with me and learn a little more about my work, swing on over to [my LinkedIn profile](https://www.linkedin.com/in/nbrombal/). I'm always happy to meet someone new!

## Fun Facts About This Site

Even a seemingly simple website can be full of surprises and challenges if you're open to learning new things. Here are a few of the interesting journeys and detours I found myself on while I put this one together.

- The site has automatic colour theming (i.e. light/dark mode) based on the user's operating system or browser preferences. This is handled via the [`prefers-color-scheme` CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
- All of the site's colours are managed using [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), allowing me to keep all of my colour declarations conveniently centralized at the top of the stylesheet.
- The site is optimized for printing using the `print` [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) so I can quickly and easily provide a paper or PDF copy. Ensuring elements broke neatly across page breaks turned out to be a tricky process: I had to learn the hard way that even the newer [CSS paged media properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media) like [break-inside](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside) don't work within an element acting as a [flex container](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container).
- The site's design integrity and content flow should stay the same for users with alternative [`writing-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) and [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) preferences, such as those translating to Arabic or Japanese. This is because the sizing, spacing, and positioning of page elements are defined almost entirely using [logical CSS properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) rather than the traditional physical ones (e.g. `margin-block-start` instead of `margin-top`).
- The site's layout scales to accommodate users who browse with enlarged font sizes by declaring most sizing, spacing, and positioning properties using [relative length units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) like `em` instead of absolute ones like `px`.