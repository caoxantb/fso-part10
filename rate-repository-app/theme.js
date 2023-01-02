const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    textTab: "whitesmoke"
  },
  bgColors: {
    primary: "#0366d6",
    tabPrimary: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tab: 14
  },
  fonts: {
    main: Platform.select({
      android: 'Sans-serif',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
