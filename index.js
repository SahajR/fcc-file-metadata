var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express(), port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.get("/", function(req, res){
   res.render('index');
});


app.post("/get-size", upload.single('fileData'), function(req, res, next){
    res.send({"size" : req.file.size});
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
