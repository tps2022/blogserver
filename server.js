const express = require('express')
const mongoose = require('mongoose')


const bodyParser = require("body-parser")

const cors = require("cors")

const blogArticlesData = require('./utilities/data.js')

const blogsController = require('./controllers/blogPosts.js')
// const blogPosts = require('./routes/blogPosts.routes.js')

require('dotenv').config();


const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/blogs", blogsController);

//seed db
app.get('/seed', async (req, res) => {
  await BlogPosts.deleteMany({});
  await BlogPosts.insertMany(blogArticlesData);
  res.send('done!');
});




const DB_CONNECTION = process.env.MONGO_URI;
const PORT = process.env.PORT || 6001;


//comment
mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error));