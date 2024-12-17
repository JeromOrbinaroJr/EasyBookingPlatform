const express = require('express');
const router = express.Router();

// Моделируем данные о столиках
let tables = [
    { booked: false },
    { booked: false },
    { booked: false },
    { booked: false },
    { booked: false },
];

// Страница с бронированиями
router.get('/bookings', (req, res) => {
    res.render('client/bookings', { title: 'Бронирования', tables: tables });
});

// Бронирование столика
router.post('/book-table/:id', (req, res) => {
    const tableId = req.params.id;
    
    // Проверка, что столик существует и не забронирован
    if (tables[tableId] && !tables[tableId].booked) {
        tables[tableId].booked = true;
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;
