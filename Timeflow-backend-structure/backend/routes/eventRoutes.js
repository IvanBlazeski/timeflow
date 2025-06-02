// routes/eventRoutes.js
const express = require('express');
const router = express.Router();

// Примерни податоци – ќе ги замениш со MongoDB подоцна
const sampleEvents = [
  { id: 1, title: 'Настан 1', date: '2025-06-01', location: 'Скопје' },
  { id: 2, title: 'Настан 2', date: '2025-06-02', location: 'Битола' },
];

// GET /api/events – враќа сите настани
router.get('/', (req, res) => {
  res.json(sampleEvents);
});

module.exports = router;
