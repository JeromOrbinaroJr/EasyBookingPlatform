const express = require('express');
const path = require('path');

const app = express();

// Настройка движка представлений
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Статические файлы (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Роуты для клиента и бизнеса
const clientRoutes = require('./routes/clientRoutes');
const businessRoutes = require('./routes/businessRoutes');
app.use('/client', clientRoutes);
app.use('/business', businessRoutes);

// Главная страница
app.get('/', (req, res) => {
    res.render('client/index', { 
        title: 'Главная страница клиента', 
        body: '<h1>Добро пожаловать на платформу для бронирования!</h1><p>На этом сайте вы можете легко найти и забронировать доступные слоты для различных услуг.</p>'
    });
});

app.get('/client/bookings', (req, res) => {
    res.render('client/bookings', { 
        title: 'Бронирования клиента', 
        body: '<h1>Ваши бронирования</h1><p>Здесь будут отображаться все ваши бронирования.</p>'
    });
});


app.get('/business/schedule', (req, res) => {
    res.render('business/schedule', { 
        title: 'Управление расписанием', 
        body: '<h1>Управление расписанием</h1><p>Добавьте доступные слоты для бронирования.</p>'
    });
});


// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
