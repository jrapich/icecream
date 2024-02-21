import { createTheme } from "@mui/material/styles";

//color palette object
const colors = {
  russianViolet: "#441151",
  plum: "#883677",
  frenchMauve: "#CA61C3",
  persianPink: "#EE85B5",
  coralPink: "#FF958C",
};

// Create our theme palette
let theme = createTheme({
  palette: {
    text: {
      main: colors.russianViolet,
    },
    background: {
      main: colors.persianPink,
    },
    primary: {
      main: colors.frenchMauve
      // contrastText: colors.jade,
    },
    secondary: {
      main: colors.coralPink
      // contrastText: colors.jade,
    },
    tertiary: {
      main: colors.plum,
    },
    accent: {
      main: colors.russianViolet,
    },
  },
});

//create the theme with MUI
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.background.main,
          color: theme.palette.text.main,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderTop: `solid ${theme.palette.primary.dark}`,
          borderBottom: `solid ${theme.palette.primary.dark}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.secondary.main,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
          backgroundColor: theme.palette.primary.dark,
          borderColor: theme.palette.secondary.main,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
          marginBottom: "5px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              "& legend": {
                overflow: "initial",
                textAlign: "right",
                "& span": {
                  opacity: "100",
                },
              },
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.main,
          },
          "& .MuiOutlinedInput-input": {
            color: theme.palette.text.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.tertiary.main,
          color: theme.palette.text.main,
          "&:hover": {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.secondary.dark,
          },
        },
      },
    },
  },
});

export default theme;
