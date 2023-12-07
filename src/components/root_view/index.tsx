import React from "react";
import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";

import styles from "./styles";

interface RootViewProps extends Omit<ViewProps, "children"> {
  /**@default true */
  useSafeArea?: boolean;
  children: React.ReactNode;
}

export default function RootView({
  useSafeArea = true,
  children,
  style,
}: RootViewProps) {
  const baseStyle = StyleSheet.flatten([styles.root, style]);

  return useSafeArea ? (
    <SafeAreaView style={baseStyle}>{children}</SafeAreaView>
  ) : (
    <View style={baseStyle}>{children}</View>
  );
}
