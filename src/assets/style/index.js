import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7A00",
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#FF7A00",
        color: "white",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: '#FF7A00',
        // color: 'white',
      },
    },
    MuiPickersDay: {
      day: {
        color: "#FF7A00",
      },
      daySelected: {
        backgroundColor: "#FF7A00",
        color: "white",
      },
      dayDisabled: {
        color: "#FF7A00",
      },
      current: {
        color: "#FF7A00",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "#FF7A00",
      },
    },
  },
  font: {
    robotoCon: "roboto condensed",
    raleway: "raleway",
  },
  color: {
    primary: "#FF7A00",
    primaryText: "#424242",
    red: "#EE3A52",
    brightOrange: "#FF5800",
    sandyBeach: "#FEE8D0",
    dustyOrange: "#f0793c",
    tequila: "#FFE8C7",
    paragraph: "#292929",
    darkSilver: "#6F6F6F",
    background: "#F7F7F7",
  },
});

export default theme;
