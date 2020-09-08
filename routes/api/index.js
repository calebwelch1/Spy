const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const db = require("../../models");

//TODO: Issue CRUD, CollectionCRUD, Comment CRUD go backend --> front end
router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("Talk is cheap. Show me the code. -Linus Torvalds");
});
//==================== User =====================//
//@@@@ GET ALL
router.get("/users", (req, res) => {
  db.User.findAll({
    order: [["createdAt", "DESC"]],
    limit: 5,
  }).then((dbusers) => {
    res.json(dbusers);
  });
});
//@@@ GET One by ID  *******************************************************
router.get("/users/:id", (req, res) => {
  db.User.findAll({
    where: {
      id: req.params.id,
    },
  }).then((dbusers) => {
    res.json(dbusers);
  });
});
//==================== Projects =====================//
//@@@@@ get all
router.get("/projects", (req, res) => {
  db.Project.findAll({
    order: [["createdAt", "DESC"]],
    limit: 5,
  }).then((dbProjects) => {
    // console.log(dbProjects);
    res.json(dbProjects);
    //res.redirect('/profile?userId=2');
  });
});

module.exports = router;
// @@@@@@get one by id
router.get("/projects/:id", (req, res) => {
  db.Project.findAll({
    where: {
      id: req.params.id,
      include: [db.User.id],
    },
  })
    .then((dbProject) => {
      // console.log(dbProject);
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});
//@@@@@ delete one
router.delete("/projects/:id", (req, res) => {
  db.Project.destroy({
    where: {
      id: req.params.id,
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
  db.Project.create({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    public: true,
    userLink: req.body.userLink,
    img: req.body.img,
    _id: req.body.userLink,
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
  db.Project.update(
    {
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      public: req.body.public,
      projectComplete: req.body.projectComplete,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function (dbPost) {
    res.json(dbPost);
  });
});
//@@@@@@@@ get all Projects by a User **********************************************************************************
// look up associations and figure this out and you've got most of the backend done
router.get("/user/projects/:id", (req, res) => {
  db.Project.findAll({
    where: {
      userLink: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
//==================== Issues =====================//
// @@@ Create an issue ********************************** Also refuses to work
// get "User.id cannot be blank error"

router.post("/issues/create", (req, res) => {
  db.Issue.create({
    issueTitle: req.body.issueTitle,
    issueBody: req.body.issueBody,
    issueComplete: false,
    issueInProgress: false,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
//@@@@ GET all issues
router.get("/issues", (req, res) => {
  db.Issue.findAll({
    order: [["createdAt", "DESC"]],
  }).then((dbissues) => {
    // console.log(dbissues);
    res.json(dbissues);
  });
});
//@@@@ Get issues by collection Link
router.get("/issues/:id", (req, res) => {
  db.Issue.findAll({
    where: {
      collectionLink: req.params.id,
    },
  }).then((issues) => {
    res.json(issues);
  });
});
//@@@@ Get issues by User
///================================ Collections
//@@@@ get all
router.get("/issuecollections", (req, res) => {
  db.IssueCollection.findAll({}).then((collections) => {
    res.json(collections);
  });
});
//@@@get collections by project id
router.get("/issuecollections/:id", (req, res) => {
  db.IssueCollection.findAll({
    where: {
      projectLink: req.params.id,
    },
  }).then((collections) => {
    res.json(collections);
  });
});
//@@ create collection
router.post("/issuecollections/create", (req, res) => {
  db.IssueCollection.create({
    collectionName: req.body.collectionName,
    collectionDescription: req.body.collectionDescription,
    projectLink: req.body.projectLink,
    userLink: req.body.userLink,
    img: req.body.img,
  }).then((newCollection) => {
    res.json(newCollection);
  });
});
//@ update collection
///================================ Collections
//@@@@ Get comments by issue id
router.get("/comments/:id", (req, res) => {
  db.Comment.findAll({
    where: {
      issueLink: req.params.id,
    },
  }).then((comments) => {
    res.json(comments);
  });
});
