const expres = require("express");
const cors = require("cors");
const app = expres();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Travel Buzz Server");
})

app.listen(port, () => {
    console.log("Travel Buzz Server Running on Port:", port);
})