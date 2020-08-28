import Axios from "axios";

export default {
  getProjects: function () {
    return Axios.get("/api/projects");
  },
  getProjectById: function (id) {
    return Axios.get(`/api/projects/${id}`);
  },
  getUsers: function () {
    return Axios.get("/api/users");
  },
};
