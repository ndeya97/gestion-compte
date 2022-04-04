// Load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');

app.use(bodyParser.json());


// Load mongoose
const mongoose = require('mongoose');


//Connect
mongoose.connect("mongodb://nadiop97:Ynover_97@cluster0-shard-00-00.wq4ds.mongodb.net:27017,cluster0-shard-00-01.wq4ds.mongodb.net:27017,cluster0-shard-00-02.wq4ds.mongodb.net:27017/accountsservices?ssl=true&replicaSet=atlas-oh9j0s-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
    console.log("Database is connected - accountsservice !");
});

app.get('/', (req, res) => {
    res.send("This is our main endpoind for account !")
// res.redirect('/accounts');
})  


//Account routes
app.use('/accounts', accountRoutes);


app.listen(3030, () => {
console.log("Up and running at 3030! This is our Account service");
})