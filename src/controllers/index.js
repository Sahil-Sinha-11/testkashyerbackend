// Example controller functions
const testController = {
  getTest: (req, res) => {
    res.json({
      status: 'success',
      message: 'Test controller is working!'
    });
  }
};

// Add more controllers here
// Example: const authController = require('./auth.controller');
// Example: const userController = require('./user.controller');

module.exports = {
  testController
  // Export other controllers here
}; 