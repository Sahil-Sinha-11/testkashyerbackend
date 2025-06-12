const express = require('express');
const router = express.Router();

// Import route modules here
// Example: const authRoutes = require('./auth.routes');
// Example: const userRoutes = require('./user.routes');

// Use route modules here
// Example: router.use('/auth', authRoutes);
// Example: router.use('/users', userRoutes);

// Basic test route
router.get('/test', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'API is working!' 
  });
});

module.exports = router; 