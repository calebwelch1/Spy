import React from "react";
import Moment from "react-moment";
import MenuTile from "../components/MockComponents/MenuTile";

const CountDown = (props) => {
  new Date();
  let time = "2021-04-19T12:59-0500";
  return (
    <MenuTile
      title="Deadline"
      body={<Moment to={props.time}>{Date()}</Moment>}
    />
  );
};
export default CountDown;
