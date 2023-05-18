import express from "express";
import routes from "./src/routes/crmRoutes"
import mongoose from "mongoose"
import bodyParser from "body-parser"


const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/CRMdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},).then(console.log("Succesful")).catch(err => (console.log(err)));

//bodyparser setup 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app)
app.get("/", async (req, res) => {
    try {
        res.send(`Node and express running on ${PORT}`)
    }
    catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () =>
    console.log(`your server is running on ${PORT}`))
