import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BaseButtonProps } from "./index.props";
import styles from "./styles";

import { Colors, Spacing } from "@themes";

export default function BaseButton({
  label,
  labelStyle,

  isLoading,
  wrapContent,

  outline,
  outlineColor,
  disabled,
  delayPressIn = 100,
  hitSlop,

  style,

  Leading,
  Trailing,
  onPress,
}: Readonly<BaseButtonProps>) {
  const labelColor = useMemo(() => {
    return outline ? outlineColor : Colors.white01;
  }, [outline, outlineColor]);

  const opacity = useMemo(() => (disabled ? 0.5 : 1), [disabled]);

  const alignSelf = useMemo(
    () => (wrapContent ? "baseline" : undefined),
    [wrapContent],
  );

  const flex = useMemo(() => (wrapContent ? undefined : 1), [wrapContent]);
  const paddingHorizontal = useMemo(() => {
    if (wrapContent) {
      return Spacing.L;
    }
    return undefined;
  }, [wrapContent]);

  const baseContainerStyle = useMemo(() => {
    if (outline) {
      return {
        ...styles.outlineButtonContainer,
        borderColor: outlineColor,
      };
    }
    return styles.buttonContainer;
  }, [outline, outlineColor]);

  const buttonBody = useMemo(() => {
    if (isLoading) {
      return <View style={styles.buttonContent}></View>;
    }

    return (
      <View style={styles.buttonContent}>
        {Leading && (
          <View style={styles.sideCtn}>
            <Leading />
          </View>
        )}
        <Text style={[{ color: labelColor }, labelStyle]}>{label}</Text>
        {Trailing && (
          <View style={styles.sideCtn}>
            <Trailing />
          </View>
        )}
      </View>
    );
  }, [label, labelColor, labelStyle, isLoading, Leading, Trailing]);

  return (
    <TouchableOpacity
      delayPressIn={delayPressIn}
      disabled={disabled ?? isLoading}
      hitSlop={hitSlop}
      style={StyleSheet.flatten([
        baseContainerStyle,
        { paddingHorizontal },
        { flex, opacity, alignSelf },
        style,
      ])}
      onPress={onPress}
    >
      {buttonBody}
    </TouchableOpacity>
  );
}
