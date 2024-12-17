const express = require('express');
const router = express.Router();

// Бронирование столика предприятием
router.post('/book-table/:id', (req, res) => {
    const tableId = req.params.id;

    if (tables[tableId] && !tables[tableId].booked) {
        tables[tableId].booked = true;
        tables[tableId].bookedByClient = false;  // Отметим, что столик забронирован предприятием
        res.json({ success: true });
    } else {
        res.json({ success: false, error: 'Столик уже забронирован или не существует' });
    }
});

// Отмена бронирования столика
router.post('/cancel-booking/:id', (req, res) => {
    const tableId = req.params.id;

    if (tables[tableId] && tables[tableId].booked) {
        tables[tableId].booked = false;
        tables[tableId].bookedByClient = false; // Отменяем бронь для клиента и предприятия
        res.json({ success: true });
    } else {
        res.json({ success: false, error: 'Столик не забронирован или не существует' });
    }
});


// Страница бронирования
router.get('/authorized-bookings', (req, res) => {
    res.render('client/authorizedBookings', { title: 'Бронирование столиков', tables });
});


module.exports = router;
