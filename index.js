const express = require("express")
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js")
const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);




app.get('/',(req, res) => {
    res.send('Nafisah first project as a student of knowledge. This is interesting');
});

app.get('/api/products', async (req, res) => {
   
});
app.get('/api/products/:id', async (req, res) => {

});
app.put('/api/products/:id', async (req, res) => {
       
});






mongoose.connect("mongodb+srv://nafkem:techy@myfirstproject.oxnro.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstProject")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log("Connection failed");
});