const lazyImagesPlugin = require('eleventy-plugin-lazyimages');


module.exports = function(eleventyConfig) {
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/style.min.css");
  // passthrough `dynamic-animations.js`
  eleventyConfig.addPassthroughCopy("src/dynamic-animations.js");
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};