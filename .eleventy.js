module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "." });
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addWatchTarget("src/styles/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
  };
};
