const express = require('express');
const cars = require('./cars.json');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    name: 'TEKS CAR DEALERSHIP',
    cars: cars.products
  });
});

app.get('/profile', (req, res) => {
	const car = cars.products.find(p => p.id === req.query.id);
	res.render('profile', {
		name: `About ${car.carname} ${car.carcolor}`, car,
	});
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});