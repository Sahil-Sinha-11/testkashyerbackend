// Example controller function
const testController = {
  getTest: (req, res) => {
    res.json({
      status: 'success',
      message: 'Test controller is working!'
    });
  }
};

module.exports = {
  testController
}; 