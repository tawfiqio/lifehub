const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const data = await db.query('SELECT * FROM habits');
  res.json(data.rows);
});

module.exports = router;
