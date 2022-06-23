const express = require('express'),
      app =  express(),
      port = 3200,
      bodyParser = require('body-parser'),
      path = require('path'),
      methodOverride = require('method-override');



app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/contacto', (req,res)=>{
    res.render('contact')
})


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname+ '/views')));
app.use(express.static(path.resolve(__dirname+ '/public')));
app.use('/views', express.static(path.resolve(__dirname, 'views/partials')));


app.listen(port,()=>{
    console.log('WITELECOM SERVER ON '+port);
})