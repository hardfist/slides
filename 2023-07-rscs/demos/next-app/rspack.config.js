const path = require("path");
module.exports = {
  entry: {
    main: "./src/pages/bundle.tsx",
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              minify: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  experiments: {
    css: true,
  },
};
