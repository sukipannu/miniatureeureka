const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//server routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//PORT
app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});