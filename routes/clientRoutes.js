const express = require('express');
const router = express.Router();

// Главная страница клиента
router.get('/', (req, res) => {
    res.render('client/index', { title: 'Главная страница клиента' });
});

// Страница с бронированиями
router.get('/bookings', (req, res) => {
    res.render('client/bookings', { title: 'Бронирования' });
});

module.exports = router;
