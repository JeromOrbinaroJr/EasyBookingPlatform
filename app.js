const express = require('express');
const app = express();
const path = require('path');
const clientRoutes = require('./routes/clientRoutes');
const businessRoutes = require('./routes/businessRoutes');
const authRoutes = require('./routes/authRoutes');

// Устанавливаем папку для статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

// Устанавливаем ejs как шаблонизатор
app.set('view engine', 'ejs');

// Подключаем маршруты
app.use('/client', clientRoutes);
app.use('/business', businessRoutes);
app.use('/auth', authRoutes);

// Главная страница с выбором интерфейса
app.get('/', (req, res) => {
    res.render('main');  // Отображаем главную страницу с выбором
});

// Запускаем сервер
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
