const autoprefixer = require("autoprefixer"); // autoprefixer - https://github.com/postcss/autoprefixer
const css_mqpacker = require("css-mqpacker"); // css-mqpacker - https://github.com/hail2u/node-css-mqpacker
const cssnano = require("cssnano"); // cssnano - https://github.com/hail2u/node-css-mqpacker

module.exports = {
  plugins: [
    autoprefixer,
    css_mqpacker,
    cssnano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
