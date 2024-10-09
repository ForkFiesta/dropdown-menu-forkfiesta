const path = require("path");

module.exports = {
  entry: "./src/dropdown.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dropdown.bundle.js",
    library: "Dropdown",
    libraryTarget: "umd",
  },
  mode: "production",
};
