const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

// Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const categoryRoute = require('./routes/category');

dotenv.config();
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, 'hye.png');
        // req.body.name
    }
});

const upload = multer({ storage: storage });

mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Connected to MongoDB.'))
    .catch(error => console.error(error));

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded.');
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/category', categoryRoute);


app.listen('5000', () => {
    console.log('Backend is running.');
});