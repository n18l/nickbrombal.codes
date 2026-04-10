import yaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) =>
    yaml.load(contents),
  );

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/*.css");
  eleventyConfig.addPassthroughCopy("src/favicon.*");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "_dist",
    },
  };
}
