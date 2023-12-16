import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GuidelineBaseHeight = 896;
const GuidelineBaseWidth = 413.87;

const verticalScale = (size: number, floor = true, setMax = false) => {
  const result = (screenHeight / GuidelineBaseHeight) * size;
  const newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

const horizontalScale = (size: number, floor = true, setMax = false) => {
  const result = (screenWidth / GuidelineBaseWidth) * size;
  const newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

export { verticalScale, horizontalScale };
