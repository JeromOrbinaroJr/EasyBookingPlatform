const express = require('express');
const router = express.Router();
const tables = require('./tablesData');

// Бронирование столика
router.post('/book-table/:id', (req, res) => {
    const tableId = req.params.id;

    if (tables[tableId] && !tables[tableId].booked) {
        tables[tableId].booked = true;
        tables[tableId].bookedByClient = true;  // Отметим, что столик забронирован клиентом
        res.json({ success: true });
    } else {
        res.json({ success: false, error: 'Столик уже забронирован или не существует' });
    }
});

// Страница управления бронированиями
router.get('/manage-bookings', (req, res) => {
    res.render('business/manageBookings', { title: 'Управление бронированиями', tables });
});

// Отмена брони
router.post('/cancel-booking/:id', (req, res) => {
    const tableId = req.params.id;

    if (tables[tableId] && tables[tableId].booked) {
        tables[tableId].booked = false;
        res.json({ success: true });
    } else {
        res.json({ success: false, error: 'Столик не забронирован или не существует' });
    }
});

module.exports = router;
