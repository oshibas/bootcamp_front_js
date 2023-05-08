const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfig, {
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Dotenv({
      path: "./config/.env.development",
    }),
  ],
});
