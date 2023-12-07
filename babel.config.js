module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".json"],
        alias: {
          "@assets/*": ["./src/assets/*"],
          "@utils/*": ["./src/utils/*"],

          "@components": ["./src/components"],
          "@components/*": ["./src/components/*"],

          "@screens": ["./src/screens"],
          "@screens/*": ["./src/screens/*"],

          "@navigation": ["./src/navigation"],
          "@navigation/*": ["./src/navigation/*"],

          "@themes": ["./src/themes"],
          "@app/*": ["./src/*"],
        },
      },
    ],
  ],
};
