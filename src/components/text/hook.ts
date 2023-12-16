import { TextStyle } from "react-native";

import { TextFontStyle } from "./index.props";

import { FontFamily } from "@themes";

export const useFontStyle = (fontStyle: TextFontStyle): TextStyle => {
  switch (fontStyle) {
    case "bold":
      return { fontFamily: FontFamily.bold, fontWeight: "700" };
    case "semi-bold":
      return { fontFamily: FontFamily.semiBold, fontWeight: "400" };
    case "medium":
      return { fontFamily: FontFamily.medium, fontWeight: "500" };
    default:
      return { fontFamily: FontFamily.regular };
  }
};
