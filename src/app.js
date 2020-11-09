const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

// app.set('view engine','hbs');

const path = require('path');
// console.log(path.join(__dirname,'../public'));
// console.log(path.join(__dirname,'../templates/views'));
// console.log(path.join(__dirname,'../templates/partials'));

const publicFiles = path.join(__dirname,'../public');
const viewsFiles = path.join(__dirname,'../templates/views');
const partialsFiles = path.join(__dirname,'../templates/partials');
app.use(express.static(publicFiles));
app.set('view engine','hbs');
app.set('views',viewsFiles);
hbs.registerPartials(partialsFiles)




app.get('/',(req,res) =>{
    res.render('index');
})
app.get('/weather',(req,res) =>{
    res.render('weather');
})
app.get('/about',(req,res) =>{
    res.render('about');
})

app.get('*',(req,res) =>{
    res.render('404error.hbs',{
        errMsg : 'Opps! Page Not Found'
    });
})

app.listen(port,()=>{
    console.log(`lisening to the port number at ${port}`);
});