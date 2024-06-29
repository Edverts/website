const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
      
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/img");
    
    eleventyConfig.addPlugin(eleventySass);
  
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };