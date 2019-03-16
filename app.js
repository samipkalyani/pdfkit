const fs =require('fs');
const PDF = require('pdfkit');
const express =require('express');
const app = express();
app.set('view engine','ejs');

const people=[
    {name:"samip"},
    {name:"vimal"},
    {name:"sagar"},
];
let i=1000;

people.forEach(person => {
    i++;
    let doc =new PDF();
    doc.pipe(fs.createWriteStream('pdf-files/${i}-${person.name}.pdf'));
    doc.text(`ID: ${i}\nName: {person.name}`,100,100);
    doc.end();
    console.log("PDF Generated");



});

app.get("/",(req,res)=>{
    res.render('pdf.ejs');
});

app.listen(3300);