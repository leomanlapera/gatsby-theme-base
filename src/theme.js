const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading"
};

export default {
  colors: {
    text: "#000",
    background: "#060606",
    primary: "#3fc",
    secondary: "#eof",
    muted: "#191919",
    highlight: "#29112c",
    gray: "#999",
    purple: "#c0f"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3
    }
  },
  styles: {
    Container: {
      px: 3,
      py: 0,
      maxWidth: 1200,
      margin: "0 auto"
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      variant: "textStyles.display"
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary"
      }
    },
    img: {
      maxWidth: "100%"
    }
  }
};
