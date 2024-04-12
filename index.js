const express=require('express');
const app=express();

app.get('/checking',(req,resp)=>
{
    resp.sendFile('C:/Users/Chirag Singh/Desktop/Node_Test/homepage.html');
})
app.listen(process.env.PORT||5000);
