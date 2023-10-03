module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", 'module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false
      }],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
};
