
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
        h1: {
          fontFamily: '"Itim", "Helvetica", "Arial", cursive',
          fontSize: '4rem',
          lineHeight:'1.1em',
        },
        h4: {
          fontFamily: '"Itim", "Helvetica", "Arial", cursive',
        },
        h5: {
          fontFamily: '"Itim", "Helvetica", "Arial", cursive',
        },
        subtitle1: {
          fontSize: '1.3rem',
          fontStyle: 'italic'
        },
        subtitle2: {
          fontStyle: 'italic'
        },
        body1: {
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '1.2rem'
        },
        body2: {
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '1rem',
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
