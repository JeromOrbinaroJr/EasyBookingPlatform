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

    if (!username || !password) {
        return res.status(400).json({ error: 'Введите имя пользователя и пароль' });
    }

    if (role === 'client') {
        // Перенаправление на интерфейс клиента
        return res.redirect('/client/authorized-bookings');
    } else if (role === 'business') {
        // Перенаправление на интерфейс предприятия
        return res.redirect('/business/manage-bookings');
    }

    res.status(400).json({ error: 'Неверная роль пользователя' });
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Ошибка при выходе.' });
        }
        res.redirect('/');
    });
});

module.exports = router;

