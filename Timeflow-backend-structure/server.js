// server.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware за JSON парсирање (неопходно за API)
app.use(express.json());

// Импортирај ги рутите
const eventRoutes = require('./routes/eventRoutes');

// Регистрирај ги API рутите (пр. http://localhost:3000/api/events)
app.use('/api/events', eventRoutes);

// Сервирај статички фајлови од /public
app.use(express.static(path.join(__dirname, 'public')));

// Почетна страница (на http://localhost:3000/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login-register.html'));
});

// Стартувај го серверот
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
