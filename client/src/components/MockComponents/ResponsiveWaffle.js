import React, { useContext, useEffect, useState } from "react";
import { ResponsiveWaffle } from "@nivo/waffle";
import { AuthProvider, AuthContext } from "../../AuthContext";
import API from "../../utils/API";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
let thedata = [
  {
    id: "1",
    label: "1",
    value: 13.825356841774006,
    color: "#468df3",
  },
  {
    id: "2",
    label: "2",
    value: 4.611029740390595,
    color: "#ba72ff",
  },
  {
    id: "3",
    label: "3",
    value: 12.67182177482607,
    color: "#a1cfff",
  },
];
const MyResponsiveWaffle = (data) => {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  const [waffleData, setWaffleData] = useState([]);
  const [projectOne, setProjectOne] = useState([]);
  const [projectTwo, setProjectTwo] = useState([]);
  const [projectThree, setProjectThree] = useState([]);

  useEffect(() => {
    loadWaffleData(userId);
    setWaffleData();
  }, []);

  const loadWaffleData = (id) => {
    API.getAllProjectsByUser(id).then((res) => {
      setWaffleData(res.data);
      setProjectOne(res.data[0]);
      setProjectTwo(res.data[1]);
      setProjectThree(res.data[2]);
      setWaffleDataset();
      //   console.log("waffle response", res.data[0]);
    });
  };
  const setWaffleDataset = () => {
    waffleData.map((project) => {
      return {
        id: project.projectName,
        label: project.projectName,
        value: 5,
        color: "a1cfff",
      };
    });
  };
  return (
    <ResponsiveWaffle
      data={thedata}
      total={100}
      rows={15}
      columns={13}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      emptyColor="#383838"
      colors={{ scheme: "red_yellow_blue" }}
      borderColor="#1f1f1f"
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      isInteractive={false}
      legends={[
        {
          anchor: "left",
          direction: "column",
          justify: false,
          translateX: -65,
          translateY: -1,
          itemsSpacing: 6,
          itemWidth: 122,
          itemHeight: 29,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          itemTextColor: "#fff",
          symbolSize: 22,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
                itemBackground: "#f7fafb",
              },
            },
          ],
        },
      ]}
    />
  );
};
export default MyResponsiveWaffle;
