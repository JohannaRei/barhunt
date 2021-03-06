module.exports = {
  presets: [
    '@babel/preset-flow',
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@comp': './src/components',
          '@lang': './src/languages',
          '@main': './src/screens/Main',
          '@onboard': './src/screens/Onboarding',
          '@options': './src/screens/Options',
          '@auth': './src/screens/Auth',
          '@styleObj': 'react-native/Libraries/StyleSheet/StyleSheetTypes',
          '@stores': './src/stores',
          '@utils': './src/utils',
          '@services': './src/services',
          '@navi': './src/navigation',
          '@chal': './src/screens/Challenge'
        }
      }
    ]
  ]
};
