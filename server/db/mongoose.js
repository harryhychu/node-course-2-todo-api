const mongoose = require('mongoose');
const mongodb_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(mongodb_url);

module.exports = {
	mongoose
};