import React from "react";
import moment from "moment";

export default function TimeAndDate() {
  return <p>{moment().format("dddd Do MMM, h:mm a")}</p>;
}
