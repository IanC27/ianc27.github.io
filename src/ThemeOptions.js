
export const ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
          main: '#43714a',
          dark: '#335739',
        },
        secondary: {
          main: '#cf843f',
        },
        background: {
            paper: '#ffffff',
          },
        contrastThreshold: 4.5,
      },
      typography: {
        fontFamily: '"Open Sans", sans-serif',
        h5: {
          fontFamily: '"Itim", "Helvetica", "Arial", cursive',
        },
        h4: {
          fontFamily: '"Itim", "Helvetica", "Arial", cursive',
        },
        body1: {
          fontFamily: '"Open Sans", sans-serif'
        },
      },
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
        Link: {
          underline: "none"
        }
      },
};
