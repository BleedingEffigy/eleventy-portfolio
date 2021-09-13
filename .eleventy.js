const purgeCssPlugin = require("eleventy-plugin-purgecss");
const criticalCss = require("eleventy-critical-css");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');


module.exports = function(eleventyConfig) {
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/style.css");
  // passthrough `dynamic-animations.js`
  eleventyConfig.addPassthroughCopy("src/dynamic-animations.js");
  // add purgeCss plugin
  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./purgecss.config.js",
    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });
  // add critical-css plugin
    eleventyConfig.addPlugin(criticalCss);
  // add lazy images
    eleventyConfig.addPlugin(lazyImagesPlugin);
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