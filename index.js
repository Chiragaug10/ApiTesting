const express=require('express');
const app=express();

app.get('/',(req,resp)=>
{
    resp.send({
        'Name':'Chirag',
        'Email':'chiragsinghaug10@gmail.com'
    });
})
app.listen(process.env.PORT||5000);
