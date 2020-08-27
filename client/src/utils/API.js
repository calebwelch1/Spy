import Axios from "axios";

export default {
  getProjects: function () {
    return Axios.get("/api/projects");
  },
  getUsers: function () {
    return Axios.get("/api/users");
  },
};
