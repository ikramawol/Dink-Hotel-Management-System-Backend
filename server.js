const express = require('express');
const connectDB = require('./src/config/dbConfig');

const app = require('./src/app');
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

