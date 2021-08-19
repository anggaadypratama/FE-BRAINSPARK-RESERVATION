const plugins = [
  "@babel/plugin-proposal-logical-assignment-operators",
  "@loadable/babel-plugin",
  "@babel/plugin-syntax-dynamic-import",
  [
    "babel-plugin-transform-imports",
    {
      "@material-ui/core": {
        transform: "@material-ui/core/esm/${member}",
        preventFullImport: true,
      },
      "@material-ui/icons": {
        transform: "@material-ui/icons/esm/${member}",
        preventFullImport: true,
      },
    },
  ],
];

module.exports = { plugins };
