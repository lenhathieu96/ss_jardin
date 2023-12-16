import { TextVariant, VariantStyle } from "./index.props";

import { Spacing, verticalScale } from "@themes";

export const variantStyle: Record<TextVariant, VariantStyle> = {
  h1: {
    fontSize: verticalScale(Spacing.EXTRA),
    lineHeight: verticalScale(29),
  },
  h2: {
    fontSize: verticalScale(Spacing.XXL),
    lineHeight: verticalScale(29),
  },
  h3: { fontSize: verticalScale(Spacing.XL), lineHeight: verticalScale(29) },

  subtitle1: {
    fontSize: verticalScale(Spacing.XL),
    lineHeight: verticalScale(Spacing.LS),
  },
  subtitle2: {
    fontSize: verticalScale(Spacing.LS),
    lineHeight: verticalScale(Spacing.LS),
  },

  body1: {
    fontSize: verticalScale(Spacing.L),
    lineHeight: verticalScale(Spacing.LS),
  },
  body2: {
    fontSize: verticalScale(Spacing.MS),
    lineHeight: verticalScale(Spacing.LS),
  },
};
