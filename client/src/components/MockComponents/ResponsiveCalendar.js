import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const thedata = [
  {
    day: "2017-09-02",
    value: 321,
  },
  {
    day: "2016-04-21",
    value: 103,
  },
  {
    day: "2017-04-30",
    value: 370,
  },
  {
    day: "2017-02-07",
    value: 320,
  },
];
const RenderCalendar = (data) => {
  return (
    <ResponsiveCalendar
      data={thedata}
      from="2020-01-01"
      to="2020-12-31"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      maxValue={3}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={25}
      yearLegendOffset={8}
      monthBorderWidth={1}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};
export default RenderCalendar;
