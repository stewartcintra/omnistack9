const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-zajqa.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//app.use(cors({ origin: 'htttp://localhost:3333' }))
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);