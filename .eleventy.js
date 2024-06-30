const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
      
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/img");

    eleventyConfig.addPassthroughCopy("./src/*.png");
    eleventyConfig.addPassthroughCopy("./src/*.ico");
    eleventyConfig.addPassthroughCopy("./src/*.xml");
    eleventyConfig.addPassthroughCopy("./src/*.svg");
    eleventyConfig.addPassthroughCopy("./src/*.webmanifest");
    eleventyConfig.addPassthroughCopy("./src/*.json");

    eleventyConfig.addPlugin(eleventySass);
  
    return {
      dir: {
        input: "src",
        output: "docs",
      },
      passthroughFileCopy: true
    };
  };