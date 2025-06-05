const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/habits', require('./routes/habits'));
app.use('/api/mood', require('./routes/mood'));
app.use('/api/github', require('./routes/github'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
