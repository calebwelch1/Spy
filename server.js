const express = require("express");
const session = require("express-session");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");
const IssueCollection = require("./models/IssueCollection");
const Issue = require("./models/Issue");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "client/build")));

// Express boilerplate middleware
// =============================================
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session middleware
// =============================================
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routing
// =============================================
app.use("/api", routes);

// Everything that is not an api request is sent to index.html
// for client side routing.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("\n*************************************");
    console.log(`${process.env.DB_NAME} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
      console.log("*************************************\n");
    });
  });
// .then(() => {
//   // ======================== SEEDS
//   db.Project.create({
//     _id: 1,
//     projectName: "Create Project Tracking Application",
//     projectDescription:
//       "Design and build an application that helps individuals and organizations track projects or issues within ongoing projects",
//     userLink: 999,
//   });
//   // db.Project.create({
//   //   projectName: "Read Animal Farm & 1984 by George Orwell",
//   //   //force a description length, if not long enough creates weirdly sized card

//   //   projectDescription:
//   //     "Read and analyze the classic novels Animal Farm and 1984 by George Orwell",
//   //   userLink: 999,
//   // });
// })
// .then(() => {
//   db.IssueCollection.create({
//     collectionName: "Build Front End",
//     collectionDescription:
//       "Front end of the project: components, styling, design, UX/UI",
//     projectLink: 1,
//   });
//   db.IssueCollection.create({
//     collectionName: "Build Back End",
//     collectionDescription:
//       "Back end of the project: Sequelize database, express routes, computations",
//     projectLink: 1,
//   });
// })
// // .then(() => {
// //   // db.IssueCollection.create({
// //   //   collectionName: "Analyze Characters",
// //   //   collectionDescription: "Analyze the characters of 1984",
// //   //   projectLink: 2,
// //   // });
// //   db.IssueCollection.create({
// //     collectionName: "Analyze Themes",
// //     collectionDescription: "Analyze the themes of 1984",
// //     projectLink: 2,
// //   });
// // })
// .then(() => {
//   // db.Issue.create({
//   //   issueName: "Design",
//   //   issueDescription:
//   //     "Overall Design of the project needs to be appealing. Look towards other handheld design for inspiration",
//   //   collectionLink: 1,
//   //   userLink: 999,
//   // });
//   db.Issue.create({
//     issueName: "Routes",
//     issueDescription:
//       "Must use express router to build the routes to my database",
//     collectionLink: 1,
//     userLink: 999,
//   });
// })
// .then(() => {
//   // db.Comment.create({
//   //   comment:
//   //     "Checking out handheld card and cigarette packaging for inspiration on how to design an attractive ui",
//   //   issueLink: 1,
//   // });
//   db.Comment.create({
//     comment:
//       "Need to build associations between database models so that I can cross reference user data",
//     issueLink: 1,
//   });
// });

// // can't even create an issue here, still says user constraint

// // both projects and collections are fine hmmmm
