const express = require("express");
const path = require("path"); //this is included with Node
const dotenv = require("dotenv");

dotenv.config(); //load our custom environment variables

const pageRouter = require("./modules/pages/router");
const menuRouter = require("./modules/menulinks/router");

const app = express(); //creating an Express app
const port = process.env.PORT || "3000";



//set up Express app tto use Pug as the template engine
app.set("views" , path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up public folder path for static files
app.use(express.static(path.join(__dirname,"public")));

app.use("/", pageRouter);
app.use("/admin/menu", menuRouter);

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// //the next two lines are to load get/post data in JSON form
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// //ADMIN PAGES FOR MENU LINKS
// app.get("/admin/menu", async(request, response) =>{
//     let links =await getAllLinks();
//     response.render("menu-list", {title: "Administer Menu", menu : links});
// });
// app.get("/admin/menu/add", async(request, response) => {
//     let links = await getAllLinks();
//     response.render ("menu-add", {title: "Add menu link" , menu : links});
// });
// //submission path for add post form
// app.post("/admin/menu/add/submit", async (request, response) => {
//     let wgt = request.body.weight;
//     let href = request.body.path;
//     let text = request.body.name;
//     //new link in JSON form
//     let newLink = {
//       weight: wgt,
//       path: href,
//       name: text
//     };
//     await addLink(newLink);
//     response.redirect("/admin/menu");
//   });

// //submission path for delete get form
// app.get("/admin/menu/delete", async (request, response) => {
//     let id = request.query.linkId;
//     await deleteLink(id);
//     response.redirect("/admin/menu");
//   });

//   app.get("/admin/menu/edit", async (request, response) => {
//     let links = await getAllLinks();
//     let selectedLink = await getSingleLink(request.query.linkId);
//     console.log(selectedLink);
//     response.render("menu-edit", {
//       title: "Edit menu link",
//       menu: links,
//       selectedMenu: selectedLink
//     });
//   });
//   app.post("/admin/menu/edit/submit", async (request, response) => {
//     let id = request.body.linkId; // Retrieve linkId from the request body
//     let wgt = request.body.weight;
//     let href = request.body.path;
//     let text = request.body.name;
//     //New link in json form
//     let changedlink = {
//       weight: wgt,
//       path: href,
//       name: text
//     };
//     await editLink(id, changedlink);
//     response.redirect("/admin/menu");
//   });
  

// //set up sever listening
// app.listen (port, () => {
//     console.log(`Listening on http://localhost:${port}`);
// });

// //MONGODB HELPER FUNCTIONS
// async function connection() {
//     db = client.db("testdb");
//     return db;
// }

// async function getAllLinks(){
//     db = await connection();
//     let results = db.collection("menuLinks").find({});
//     resultsArray = await results.toArray();
//     return resultsArray;
// }

// async function addLink(newLink) {
//     db = await connection();
//     let status = await db.collection("menuLinks").insertOne(newLink);
//     console.log("link added");
//   }

//   async function deleteLink(linkId) {
//     db = await connection();
//     let deleteFilter = { _id: new ObjectId(linkId) };
//     let result = await db.collection("menuLinks").deleteOne(deleteFilter);
//     if (result.deletedCount == 1) {
//       console.log("delete successful");
//     }
//   }

//   async function getSingleLink(linkId) {
//     db = await connection();
//     let result = db.collection("menuLinks").find({ _id: new ObjectId(linkId) });
//     result = await result.toArray();
//     return result[0];
//   }
  

//     async function editLink(linkId, updateLink) {
//         db = await connection();
//         let editFilter = { _id: new ObjectId(linkId) };
//         let status = await db
//           .collection("menuLinks")
//           .updateOne({ _id: new ObjectId(linkId) }, { $set: updateLink });
//         if (status.modifiedCount === 1) {
//           console.log("link edited");
//         }
//       }
  