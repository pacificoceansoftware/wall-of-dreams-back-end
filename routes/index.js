const router = require('express').Router();
const dreamRoutes = require('./dream');
const userRoutes = require('./user');
const path = require('path');

// API routes
router.use('/api/dream', dreamRoutes);
router.use('/api/user', userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../../front-end/public/index.html'));
});

module.exports = router;
