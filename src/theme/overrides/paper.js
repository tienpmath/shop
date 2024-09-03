export default function Paper(theme) {
  return {
    MuiPaper: {
      // defaultProps: {
      //   elevation: 0,
      // },

      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: theme.palette.background.default,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}
