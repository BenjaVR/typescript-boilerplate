module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {},
};
