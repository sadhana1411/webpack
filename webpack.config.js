module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: (__dirname = "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: { presets: ["e2015"] },
      },
    ],
  },
};
