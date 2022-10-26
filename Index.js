const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const coursesCategories = require('./data/courses-categories.json'); 
const course = require('./data/course-details.json'); 

app.get('/', (req,res)=>{
    res.send('course data is loading');
})
app.get('/courses-categories', (req,res)=>{
    res.send(coursesCategories);
})

app.get('/courses-details', (req,res)=>{
    res.send(course);
})
app.get('/courses-details/:id', (req,res)=>{
   const id =req.params.id;
   const selectedCourse = course.find(C => C._id===id)
   res.send(selectedCourse)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})