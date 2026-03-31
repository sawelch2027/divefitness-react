//json_package^
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors.apply());

const storage = multer.diskStorage({

});

const upload = multer({ storage: storage });

let houses = [

]

app.get("/api/houses", (req,res)=>{
  res.send(houses);
});

app.get("/api/houses/:id", (req,res)=>{
  const house=houses.find((h)=>h._id===parseInt(req.params.id));
  res.send(house);
});

//listen for incoming requests
app.listen(3001, ()=>{
  console.log("Server is up and running");
});
