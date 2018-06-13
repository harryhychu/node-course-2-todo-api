// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');	

	// deleteMany
	// db.collection('Users').deleteMany({name: 'Harry Chu'});

	// deleteOne
	// db.collection('Users').deleteOne({age: 24}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	db.collection('Users').findOneAndDelete({_id: ObjectID("5b20ccf7f90c9f2bfb7853bd")}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	// db.close();
});
