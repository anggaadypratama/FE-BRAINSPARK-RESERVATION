const plugins = [
  [
    'babel-plugin-transform-imports',
    {
      '@material-ui/core': {
        'transform': '@material-ui/core/esm/${member}',
        'preventFullImport': true
      },
      '@material-ui/icons': {
        'transform': '@material-ui/icons/esm/${member}',
        'preventFullImport': true
      }
    },
    "@loadable/babel-plugin"
  ]
];

module.exports = {plugins};