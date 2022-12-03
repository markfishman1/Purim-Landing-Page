const express = require('express');
const app = express();
const http = require('http');

// Express App Configuration:
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
// const path=require('./public')
// app.get('*', function (req, res) {
//     res.sendFile(path);
//   });
