const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const fetch = require('node-fetch');
app.get('/cors', async(request, response) => {
    const api_url = 'https://bolkar-club.s3.ap-south-1.amazonaws.com/task/tutors.json';
    const data = await fetch(api_url);
    const r = await data.json();
    console.log(r);
    response.send(r);
    })
app.listen(8080, () => {
    console.log('listening on port 8080')
})