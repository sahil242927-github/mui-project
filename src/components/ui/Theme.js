import { createMuiTheme } from '@material-ui/core/styles';

//our custom colors for our App
const arcBlue = '#0b72b9';
const arcOrange = '#FFBA60';

// creating an instance of the default theme and overwriting the the values
export default createMuiTheme({
  palette: {
    // instead of variable you can directly add color like "#ffba60". We are using variable because we need to use
    // at multiple places
    arcBlue: `${arcBlue}`,
    arcOrange: `${arcOrange}`,

    // Now adding our custom color to the palette so MUI generates a lighter and darker versions
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
    },
  },
});
