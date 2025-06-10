// Example model structure
class BaseModel {
  constructor(data) {
    this.data = data;
  }

  toJSON() {
    return this.data;
  }
}

// Example model class
class ExampleModel extends BaseModel {
  constructor(data) {
    super(data);
  }

  // Add model methods here
}

module.exports = {
  BaseModel,
  ExampleModel
}; 