import React from "react";
import moment from "moment";
import "./TimeAndDate.css";

export default function TimeAndDate() {
  return (
    <p className="lighter-color time-and-date">
      {moment().format("dddd Do MMMM, h:mm a")}
    </p>
  );
}
