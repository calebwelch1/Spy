import Axios from "axios";
// need help with create project, only know how to get/ get by id. need to make for all and make delete routes...
// also need get all by user/get all from project etc.
export default {
  getUserId: function () {
    return Axios.get("/api/auth/user_data");
  },
  getUsers: function () {
    return Axios.get("/api/users");
  },
  getUserbyId: function (id) {
    return Axios.get(`/api/users/${id}`);
  },
  updateIssuesComplete: function (id, updatedIssue) {
    return Axios.put(`/api/users/${id}/updateIssueCount`, updatedIssue);
  },
  getAllIssuesByUser: function (id) {
    return Axios.get(`/api/issues/user/${id}`);
  },
  // ==================================================== Projects
  getProjects: function () {
    return Axios.get("/api/projects");
  },
  getProjectById: function (id) {
    return Axios.get(`/api/projects/${id}`);
  },
  deleteProjectById: function (id) {
    return Axios.delete(`/api/projects/${id}`);
  },
  createProject: function (newProject) {
    return Axios.post("/api/projects/create", newProject);
  },
  updateProject: function (id, updatedProject) {
    return Axios.put(`/api/projects/update/${id}`, updatedProject);
  },
  getAllProjectsByUser: function (id) {
    return Axios.get(`/api/projects/user/${id}`);
  },
  // ==================================================== Issues
  getIssues: function () {
    return Axios.get("/api/issues");
  },
  getIssuesByCollectionId: function (id) {
    return Axios.get(`/api/issues/${id}`);
  },
  createIssue: function (newIssue) {
    return Axios.post("/api/issues/create", newIssue);
  },
  deleteIssueById: function (id) {
    return Axios.delete(`/api/issues/${id}`);
  },
  updateIssueComplete: function (id) {
    return Axios.put(`/api/issues/update/${id}`);
  },
  // ==================================================== Collections
  getCollectionsByProjectId: function (id) {
    return Axios.get(`/api/issuecollections/${id}`);
  },
  createCollection: function (newCollection) {
    return Axios.post("/api/issuecollections/create", newCollection);
  },
  // ==================================================== Comments
  getCommentsByIssueId: function (id) {
    return Axios.get(`/api/comments/${id}`);
  },
  createComment: function (newComment) {
    return Axios.post("/api/comments/create", newComment);
  },
  getAllCommentsByUser: function (id) {
    return Axios.get(`/api/comments/user/${id}`);
  },
};
