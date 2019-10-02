const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/sessions', SessionController.store);

router.get('/spots', SpotController.index);
router.post('/spots', upload.single('thumbnail'), SpotController.store);

router.get('/dashboard', DashboardController.show);

router.post('/spots/:spot_id/booking', BookingController.store);

module.exports = router;