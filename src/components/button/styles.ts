import { StyleSheet, ViewStyle } from "react-native";

import { Colors, verticalScale } from "@themes";

const BASE_HEIGHT = Math.max(Math.min(verticalScale(40), 48), 40);

const $baseButtonStyle: ViewStyle = {
  justifyContent: "center",
  backgroundColor: Colors.primary,
  borderRadius: 20,
  maxHeight: BASE_HEIGHT,
  minHeight: BASE_HEIGHT,
};

const styles = StyleSheet.create({
  buttonContainer: {
    ...$baseButtonStyle,
  },
  buttonContent: {
    alignItem: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  outlineButtonContainer: {
    ...$baseButtonStyle,
    backgroundColor: Colors.white01,
    borderWidth: 1,
  },

  sideCtn: {
    justifyContent: "center",
  },
});

export default styles;
