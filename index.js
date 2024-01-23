const express=require('express');
const app=express();

app.get('/radhe',(req,resp)=>
{
    resp.send({
        'name':'Chirag Singh',
        'Designation':'Software Engineer I'
    })

})
app.listen(process.env.PORT||5000);