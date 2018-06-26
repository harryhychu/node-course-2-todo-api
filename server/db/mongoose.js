const mongoose = require('mongoose');
const mongodb_url = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodb_url);

module.exports = {
	mongoose
};
