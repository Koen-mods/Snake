const express = require("express");
const app = express();
const path = require('path');

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'inde.html'));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});