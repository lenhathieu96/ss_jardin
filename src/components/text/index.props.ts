import { StyleProp, TextProps, TextStyle } from "react-native";

export type TextVariant =
  | "h1"
  /**
   * fontSize: 48
   * lineHeight: 29
   */
  | "h2"
  /**
   * fontSize: 26
   * lineHeight: 29
   */
  | "h3"
  /**
   * fontSize: 24
   * lineHeight: 29
   */
  | "subtitle1"
  /**
   * fontSize: 24
   * lineHeight: 18
   */
  | "subtitle2"
  /**
   * fontSize: 18
   * lineHeight: 18
   */
  | "body1"
  /**
   * fontSize: 16
   * lineHeight: 18
   */
  | "body2";
/**
 * fontSize: 14
 * lineHeight: 18
 */

export type TextFontStyle = "regular" | "medium" | "semi-bold" | "bold";
export type VariantStyle = Pick<TextStyle, "fontSize" | "lineHeight">;

export interface BaseTextProps
  extends Omit<TextProps, "allowFontScaling" | "style"> {
  /**
   * @default body2
   *
   * @variant h1: fontSize: 48 - lineHeight: 29
   * @variant h2: fontSize: 26 - lineHeight: 29
   * @variant h3: fontSize: 24 - lineHeight: 29
   * @variant subtitle1: fontSize: 24 - lineHeight: 18
   * @variant subtitle2: fontSize: 18 - lineHeight: 18
   * @variant body1: fontSize: 16 - lineHeight: 18
   * @variant body2: fontSize: 14 - lineHeight: 18
   *
   */
  variant?: TextVariant;
  /**
   * @default regular
   */
  fontStyle?: TextFontStyle;
  style?: StyleProp<Omit<TextStyle, "fontFamily">>;
}
