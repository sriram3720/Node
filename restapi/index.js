const express = require('express');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const courses=[
    {id :1,name:'mosh'},
    {id:2,name:"loki"},
    {id:3,name:"scooby"}
];

app.listen(3000,()=>{
    console.log(`listening server ${port}....`);
});

app.get('/',(req,res)=>{
    res.send('hello world');
});

// app.get('/:id/:name',(req,res)=>{
//     res.send(req.params.name);
// });

app.get('/course',(req,res)=>{
    res.send(courses);

});
app.get('/course/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if(!course) res.status(404).send("the couse is not available");
    res.send(course);
    
});

app.post('/app',(req,res)=>{
    const course={
        id :courses.length +1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})
