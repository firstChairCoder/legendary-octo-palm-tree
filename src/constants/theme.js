export const COLORS = {
  primary: "#2C385A",
  clay: "#E1A067",
  darkBlue: "#1E2742",
  red: "#F43440",
  secondary: "#9DA2B2",
  darkClay: "#633820",
  black2: "#1D1E21",
  tertiary: "#2EA96A",
  green: "#6A9347",
  slate: "#3B455D",
  darkGray: "#3A3A3A",
  white: "#FFFFFF",
  lightWhite: "#F7F1EA",
  brownWhite: "#F9F0E7",
  black: "#000000",
  gray: "#DFDFDF",
  yellow: "#FFE200",
  brownBG: "rgba(247, 241, 234, 0.35);"
};

export const SIZES = {
  base: 10,
  small: 12,
  font: 14,
  medium: 16,
  xMedium: 18,
  large: 20,
  padding: 20,
  big: 22,
  xlarge: 24,
  xPadding: 26,
  xxlarge: 32
};

export const SHADOW = {
  darkShadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
  mediumShadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  lightShadow: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  },
  dimShadow: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1
  }
};

export default {
  COLORS,
  SIZES,
  SHADOW
};
