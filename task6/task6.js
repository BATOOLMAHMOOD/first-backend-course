const express = require("express");
 const app = express();
 
 const arr = ["cs", "swf", "anim", "vr"]
 app.get("/", (req,res)=>{
     res.send("hello");
 })
 const mysql = require("mysql2");
  const pool = mysql.createPool({
      host: "localhost",
      port: "3306",
      user: "root",
      database: "intro_to_backend"
  }).promise();
 
 app.get("/majors",(req,res)=> {
     res.send(arr)
  app.get("/users", async (req, res) => {
     const data = await pool.execute("select * from users");
     console.log(data[0]);
     res.send(data[0])
 });
 
 function expressFunction(name,functiontoPrintName){
 functiontoPrintName()
 }
 
 expressFunction("batool", function(){console.log("Nova");});
 app.listen(3000,()=>{})
 app.listen(3000,()=>{})}