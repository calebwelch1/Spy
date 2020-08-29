const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const db = require("../../models");
router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("Talk is cheap. Show me the code. -Linus Torvalds");
});
//==================== User =====================//
//@@@@ GET ALL
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
//@@@
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
// @@@@@@get one by id
router.get("/projects/:id", (req, res) => {
  db.Projects.findAll({
    where: {
      projectId: req.params.id,
    },
  })
    .then((dbProject) => {
      console.log(dbProject);
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});
//@@@@@ delete one
router.delete("/projects/:id", (req, res) => {
  db.Projects.destroy({
    where: {
      projectId: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
// @@@@@@ create one
router.post("/projects/create", (req, res) => {
  db.Projects.create({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    public: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
//@@@@@@ update by id
router.put("/projects/update/:id", (req, res) => {
  db.Projects.update(
    {
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      public: req.body.public,
      projectComplete: req.body.projectComplete,
    },
    {
      where: {
        projectId: req.params.id,
      },
    }
  ).then(function (dbPost) {
    res.json(dbPost);
  });
});
//==================== Issues =====================//
//@@@@ GET all issues
router.get("/issues", (req, res) => {
  db.Issues.findAll({
    order: [["createdAt", "DESC"]],
  }).then((dbissues) => {
    console.log(dissues);
    res.json(dbissues);
  });
});
