const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// middleware setup that instructs the server to make certain files readily available, i.e. make files that index.html requires available
app.use(express.static('public'));




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});