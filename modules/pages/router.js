const express = require("express");
const pageRouter = express.Router();
const menuLinks = require("../menulinks/func");
const Furniture = require("../pages/func");
const blogList = require("../pages/func");

// pageRouter.get("/",async (request, response) => {
//     links = await menuLinks.getAllLinks();
    
//     console.log(links);
//     response.render("index", {title: "Home" , menu : links});
// });
pageRouter.get("/about",async (request, response) => {
    links = await menuLinks.getAllLinks();
    response.render("about", {title: "About" , menu : links});
    console.log(1);
})

pageRouter.get("/blog",async (request, response) => {
  links = await menuLinks.getAllLinks();
  let blog = await blogList.getBlogList();
  response.render("blog", {title: "Blog", blogPosts: blog , menu : links});
  
  console.log(2);
})
pageRouter.get("/contactus",async (request, response) => {
  links = await menuLinks.getAllLinks();
  response.render("contactus", {title: "contactus" , menu : links});
  console.log(1);
})
pageRouter.get("/", async (request, response) => {
    links = await menuLinks.getAllLinks();
    console.log(links);
    let furnitureItems = await Furniture.getAllItems();
    
    console.log(furnitureItems);
    response.render("index", { title: "Home", furniture: furnitureItems, links: links });
  });


  

module.exports = pageRouter;
