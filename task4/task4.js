const { urlencoded, json } = require("express");
const express=require("express");
const app = express ();
app.use(urlencoded({ extended: true }));
app.use(json());
const missions = [
    {
        id: "1",
        missionName: "aple 1",
        astronaut: ["batool", "khattab", "sadeel"],
        progress: 34,
    },
    {
        id: "2",
        missionName: "appolo1",
        astronaut: ["batool", "massa", "sara"],
        progress: 100,

    },
    {
        id: "3",
        missionName: "airSTAR",
        astronaut: ["mayar", "hala", "yara"],
        progress: 90,
    }
];
app.post("/mission", (req, res) =>{
    
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut);
   
    missions.push(data);
    res.send("create mission");
});
app.get("/missions", (req, res) =>{
    res.send( missions);
} );
app.get("/mission/:id" , (req, res) =>{
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++){
        if (missions[i].id === paramsId) {
            res.send(missions[i]);
        }
    }
    res.send("not found the  mission");
});
app.put("/mission", (req, res) =>{
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut);
    console.log(data);
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === data.id) {
            missions[i] = data ;
            res.send("update the mission ");
            
        }
        
    }
    res.send("mission is not found");
   
});
   
app.delete("/mission/:id" , (req, res) =>{
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === paramsId){
            missions.splice(i, 1);
            res.send("mission is deleted");
        }
        
    }
    
    res.send("mission is not found ");
});

const port = 3000;
app.listen(port , () =>{
    console.log ("the server running on port " + port);
});