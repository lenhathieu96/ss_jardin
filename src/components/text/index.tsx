// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { memo, useMemo } from "react";
import equals from "react-fast-compare";
import { StyleSheet, Text as NativeText } from "react-native";

import { useFontStyle } from "./hook";
import { BaseTextProps } from "./index.props";
import { variantStyle } from "./styles";

const Text = ({
  style,
  variant = "body2",
  fontStyle = "regular",
  ...otherProps
}: BaseTextProps) => {
  const baseFontStyle = useFontStyle(fontStyle);

  const baseStyle = useMemo(
    () => StyleSheet.flatten([variantStyle[variant], baseFontStyle, style]),
    [variant, style, fontStyle],
  );

  return (
    <NativeText allowFontScaling={false} style={baseStyle} {...otherProps} />
  );
};
export default memo(Text, equals);
