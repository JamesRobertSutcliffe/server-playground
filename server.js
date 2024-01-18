const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/randomPostcode', async (req, res) => {
    const randomPostcode = await fetch('http://api.postcodes.io/random/postcodes').then(res => res.json());
    res.json(randomPostcode); // <-- respond to http request with json data
});