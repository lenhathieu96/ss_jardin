import { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "../text";

import { ITextButtonProps } from "./index.props";

import { Colors } from "@themes";

export default function TextButton({
  label,
  keepOpacity = false,
  disabled,
  labelStyle,
  style,
  delayPressIn = 100,
  numberOfLines = 1,
  ...otherProps
}: Readonly<ITextButtonProps>) {
  const opacity = useMemo(
    () => (disabled && !keepOpacity ? 0.5 : 1),
    [disabled, keepOpacity],
  );

  return (
    <TouchableOpacity
      delayPressIn={delayPressIn}
      disabled={disabled}
      style={StyleSheet.flatten([style, { opacity }])}
      {...otherProps}
    >
      <Text
        fontStyle="medium"
        numberOfLines={numberOfLines}
        style={StyleSheet.flatten([styles.baseTextButtonLabel, labelStyle])}
        variant="subtitle2"
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseTextButtonLabel: {
    color: Colors.primary,
  },
});
