const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

//Connect DB
connectDB();
app.use(cors(corsOptions));
// Init middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/api/users'));
// app.use(
//   "https://contrl-cv.onrender.com/api/users",
//   require("./routes/api/users")
// );
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/', require('./routes/api/dumps'));
// app.use("/api/", require("./routes/api/dumps"));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
