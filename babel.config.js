module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json'
        ],
        alias: {
          '@components' : './src/components',
          '@screens' : './src/screens',
          '@hooks' : './src/hooks',
          '@services': './src/services',
          '@routes' : './src/routes',
          '@utilities' : './src/utilities',
        }
      }
    ]
  ]
};
