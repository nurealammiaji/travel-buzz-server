const express = require("express");
const cors = require("cors");
const app = express();
const destination = require("./data/destination.json");
const port = 5000;

app.use(cors());

app.get("/destination", (req, res) => {
    res.send(destination);
})

app.get("/destination/:id", (req, res) => {
    const id = req.params.id;
    const specificDestination = destination.find(d => d.id === id);
    res.send(specificDestination);
})

app.get("/", (req, res) => {
    res.send("Travel Buzz Server");
})

app.listen(port, () => {
    console.log("Travel Buzz Server Running on Port:", port);
})