const express = require('express');
const app = express();
app.use(express.static('views'));
app.get('/',(req,res)=>
{
    res.sendFile(__dirname + '/views/index.html');
})
app.listen(8000,(result,error)=>
{
    if(error)
        {
            console.log(error);
            }
            else
            {
                
                console.log('Server is running on port 8000');
                }
                })