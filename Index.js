const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const coursesCategories = require('./data/courses-categories.json'); 

app.get('/courses-categories', (req,res)=>{
    res.send(coursesCategories);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})