const app =  express();
const express = require('express'); 
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//retrieve css and js files
app.use(express.static("public"));

//JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//app.use(express.static('public'));

//PORT 
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;