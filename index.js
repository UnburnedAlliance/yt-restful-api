const express = require('express');

const app = express();

/*
app.get()
app.post()
app.put()
app.delete()
*/

// Route Handler
app.get('/', (req, res) => {
    res.send('Seamoss');
});

app.get('/api/users', (req, res) => {
    // Static data simulates database calls for now
    res.send([1,2,3])
})

app.listen(3000, () => console.log('Listening on 3000'))