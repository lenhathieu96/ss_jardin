import { ComponentType } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface IBaseButton
  extends Omit<TouchableOpacityProps, "delayPressIn" | "onPress"> {
  /**
   * @default 100
   */
  delayPressIn?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface BaseButtonProps extends IBaseButton {
  label: string;
  labelStyle?: StyleProp<Omit<TextStyle, "fontFamily">>;
  /**
   * @default true
   */
  useSafeArea?: boolean;

  /**
   * Show loading animation instead of label
   * @default false
   */
  isLoading?: boolean;

  /**
   * @default false
   */
  outline?: boolean;
  outlineColor?: string;
  /**
   * @default false
   */
  wrapContent?: boolean;

  Leading?: ComponentType;
  Trailing?: ComponentType;
}

export interface ITextButtonProps extends IBaseButton {
  disabled?: boolean;
  numberOfLines?: number;
  /**
   * @default false
   * When set true, button opacity will always have value 1 whether button
   * is disabled or not
   */
  keepOpacity?: boolean;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
