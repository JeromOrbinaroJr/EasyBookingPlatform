const express = require('express');
const router = express.Router();

// Главная страница бизнеса
router.get('/', (req, res) => {
    res.render('business/index', { title: 'Главная страница бизнеса' });
});

// Страница с расписанием
router.get('/schedule', (req, res) => {
    res.render('business/schedule', { title: 'Расписание' });
});

module.exports = router;
