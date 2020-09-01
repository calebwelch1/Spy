import React, { useEffect, useState } from "react";
import Axios from "axios";
import API from "../utils/API";

function GetUserId(props) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    API.getUserId((response) => {
      setUserId(response);
    });
  };

  return <div>{userId}</div>;
}

export default GetUserId;
