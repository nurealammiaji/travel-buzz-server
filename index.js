const express = require("express");
const cors = require("cors");
const app = express();
const destinations = require("./data/destinations.json");
const port = 5000;

app.use(cors());

app.get("/destinations", (req, res) => {
    res.send(destinations);
})

app.get("/destinations/:id", (req, res) => {
    const id = req.params.id;
    const destination = destinations.find(d => d.id === id);
    res.send(destination);
})

app.get("/", (req, res) => {
    res.send("Travel Buzz Server");
})

app.listen(port, () => {
    console.log("Travel Buzz Server Running on Port:", port);
})