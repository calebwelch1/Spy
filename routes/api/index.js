const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const db = require("../../models");
router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("Talk is cheap. Show me the code. -Linus Torvalds");
});
//==================== User =====================//
router.get("/users", (req, res) => {
  db.Projects.findAll({
    order: [["createdAt", "DESC"]],
    limit: 5,
  }).then((dbusers) => {
    console.log(dbusers);
    res.json(dbusers);
    //res.redirect('/profile?userId=2');
  });
});
//==================== Projects =====================//
//@@@@@ get all
router.get("/projects", (req, res) => {
  db.Projects.findAll({
    order: [["createdAt", "DESC"]],
    limit: 5,
  }).then((dbProjects) => {
    console.log(dbProjects);
    res.json(dbProjects);
    //res.redirect('/profile?userId=2');
  });
});
module.exports = router;
// get one by id

// @@@@@@ create one
router.post("/projects/create", (req, res) => {
  db.Projects.create({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    public: req.body.public,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
//@@@@@@ update by id?
router.put("/projects/update:id", (req, res) => {
  db.Profile.update(
    {
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      public: req.body.public,
    },
    {
      where: {
        userId: req.params.id,
      },
    }
  ).then(function (dbPost) {
    res.json(dbPost);
  });
});
