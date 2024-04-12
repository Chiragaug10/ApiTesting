const express=require('express');
const app=express();

app.get('/checking',(req,resp)=>
{
    resp.sendFile('https://github.com/Chiragaug10/ApiTesting/blob/main/homepage.html');
})
app.listen(process.env.PORT||5000);
