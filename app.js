const express = require('express');
const path = require("path");

const app = express();
app.set('view engine' , 'pug');
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render('layout');
})



app.listen(8080);