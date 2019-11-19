require("dotenv").config();

//Dependencies
const
    express = require("express"),
    path = require("path"),
    mongoose = require("mongoose"),
    router = require("./routes"),
    PORT = process.env.PORT || 3000,
    app = express();

app
    .use(express.static(path.join(__dirname, 'public'))) // Serve static content for the app from the "public" directory in the application directory.
    .use(express.urlencoded({ extended: true })) // Parse application body as JSON
    .use(express.json())
    .use(router); // ROUTES


// Configure Mongoose and Start the Server

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${process.env.MONGODB_LOCALDBName}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log("App listening on PORT " + PORT)))
    .catch((error) => console.error(error));

