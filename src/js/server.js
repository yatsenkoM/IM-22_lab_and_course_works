'use strict';

require('dotenv').config();

const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const db = require('./db');
const app = express();

app.use(express.json());
app.use('/files', fileRoutes);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`),
);

const closeServer = async () => {
  console.log('\nStarting the process of closing the app...');
  try {
    await db.pool.end();
    await server.close(() => {
      process.exit();
    });
  } catch (err) {
    console.error('Error during closing the app: ' + err.message);
    process.exit(1);
  }
};

process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);
