console.log("")
const express = require("express");
const app = express();
app.use(express.json());
app.use('/', require('./routes/endpoints'));

// constants
const port = 8081;

app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
})

module.exports =app;