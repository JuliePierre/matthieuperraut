module.exports = {
  extends: "standard",

  env: {
    browser: true
  },

  parser: "babel-eslint",

  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["frontend", "node_modules"]
          }
        }
      }
    }
  }
};
