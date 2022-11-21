module.exports = {
    entry: ["main.js"],
    mode: "production",
    target: "node",
    resolve: {
      modules: ["node_modules"],
      extensions: [".js", ".json"],
      fallback: { path: require.resolve("path-browserify") },
    },
    output: {
      filename: "./public/bundle.js",
    },
  };