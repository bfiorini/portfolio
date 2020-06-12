import { roboto } from "@theme-ui/presets"

export default {
  ...roboto,
  breakpoints: ["768px"],
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#111",
    secondary: "#555",
    muted: "#777",
  },
  styles: {
    ...roboto.styles,
    header: {
      a: {
        color: "primary",
        textDecoration: "none",
        "&:hover": {
          color: "secondary",
        },
      },
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "secondary",
      },
    },
  },
}
