import { StyleSheet, ViewStyle } from "react-native";

import { Colors, Spacing, verticalScale } from "@themes";

const BASE_HEIGHT = verticalScale(57);

const $baseButtonStyle: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Colors.primary,
  borderRadius: Spacing.L,
  maxHeight: BASE_HEIGHT,
  minHeight: BASE_HEIGHT,
};

const styles = StyleSheet.create({
  buttonContainer: {
    ...$baseButtonStyle,
  },
  buttonContent: {
    alignItems: "center",
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
