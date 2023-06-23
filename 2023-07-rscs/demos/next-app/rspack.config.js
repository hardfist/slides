const path = require("path");
module.exports = {
  entry: {
    main: "./src/pages/bundle.tsx",
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
};
