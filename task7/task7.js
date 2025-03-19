const express = require("express");
 const app = express();
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 
 let scores = [];
 
 
 app.post("/scores", (req, res) => {
     const score = {
         id: scores.length + 1,
         player: req.body.player,
         score: req.body.score
     };
     scores.push(score);
     res.json({ message: "Score Submitted", score });
 });
 
 
 app.get("/scores", (req, res) => {
     const sortedScores = scores.sort((a, b) => b.score - a.score);
     res.json(sortedScores);
 });
 
 
 app.delete("/scores/:id", (req, res) => {
     const id = parseInt(req.params.id);
     const initialLength = scores.length;
     scores = scores.filter(s => s.id !== id);
     res.json({ message: "Score Deleted" });
 });
 
 app.listen(3000, () => {
     console.log("Bowling Score API running on port 3000");
 });