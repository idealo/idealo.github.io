const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    disableStaticImages: true,
  },
};
const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // See: https://github.com/cyrilwanner/next-optimized-images#responsive
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [300, 320, 640, 960, 1200, 1800, 2400],
          placeholder: true,
          placeholderSize: 40,
        },
      },
    ],
  ],
  nextConfig
);
module.exports = config;
