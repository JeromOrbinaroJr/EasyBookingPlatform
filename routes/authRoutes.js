const express = require('express');
const router = express.Router();

// Страница входа для клиента
router.get('/login/client', (req, res) => {
    res.render('auth/login', { role: 'client', title: 'Вход как клиент' });
});

// Страница входа для предприятия
router.get('/login/business', (req, res) => {
    res.render('auth/login', { role: 'business', title: 'Вход как предприятие' });
});

// Обработка входа
router.post('/login', (req, res) => {
    const { username, password, role } = req.body;
    
    if (role === 'client') {
        // Логика для входа клиента
        res.redirect('/client/bookings');  // Перенаправление на страницу пользователя
    } else if (role === 'business') {
        // Логика для входа бизнеса
        res.redirect('/business/schedule');  // Перенаправление на страницу бизнеса
    } else {
        res.status(401).send('Неверная роль.');
    }
});

module.exports = router;
