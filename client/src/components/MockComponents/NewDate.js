import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Moment from "react-moment";
import MenuTileLight from "./MenuTileLight";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CountDown from "../CountDown";
import MenuTile from "./MenuTile";
export default function NewDate(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [deadline, setDeadline] = React.useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const white = {
    color: "white",
  };
  return (
    <>
      <MenuTileLight
        superTitle="Deadline"
        title={<Moment to={selectedDate}>{Date()}</Moment>}
        body={
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Set a Deadline"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        }
      />
      {/* <CountDown time={selectedDate} {...props} /> */}
    </>
  );
}
