module.exports = {
  extends: ["eslint-config-standard", "plugin:prettier/recommended"],

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
