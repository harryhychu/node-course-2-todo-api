// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');	

	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID('5b21ff9e6bc0f6d11b9fce18')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id : new ObjectID('5b21ff57bdf6522a6f326350')
	}, {
		$set: {
			name: 'MOMO Chan'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})

	// db.close();
});
