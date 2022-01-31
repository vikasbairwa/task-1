require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const fetch = require('node-fetch');
const port = process.env.PORT;
const url = process.env.URL;
app.get('/cors', async(request, response) => {
    const api_url = url;
    const data = await fetch(api_url);
    const r = await data.json();
    response.send(r);
    })
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})