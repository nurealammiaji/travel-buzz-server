const expres = require("express");
const app = expres();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Travel Buzz Server");
})

app.listen(port, () => {
    console.log("Travel Buzz Server Running:", port);
})