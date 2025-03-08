// Constant declarations
const colors = {
  black: "#000000",
  white: "#ffffff",
  "cedar-wood-finish": "#701500",
  "algerian-colar": "#FF5B4A",
  "blue-ruin": "#0075CE",
  "glazed-sugar": "#FFDACA",
  "toasted-marshmallow-fluff": "#FFFAEA",
}

const themes = {
  light: {
    primary: colors.white,
    secondary: colors.black,
    contrast: colors["algerian-colar"],
  },
  dark: {
    primary: colors.black,
    secondary: colors.white,
    contrast: colors["algerian-colar"],
  },
}

const breakpoints = {
  breakpointMobile: 800,
  breakpointTablet: 1200,
}

const screens = {
  mobile: { width: 375, height: 650 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 816 },
}

/** @type {(keyof typeof themes)[]} */
const themeNames = Object.keys(themes)

const config = {
  themes,
}

export { breakpoints, colors, config, screens, themeNames, themes }
