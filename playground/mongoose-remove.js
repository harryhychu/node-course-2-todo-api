const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
// 	console.log(result);
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b23759d6bc0f6d11b9ff1c1').then((doc) => {
// 	console.log(doc);
// });

Todo.findOneAndRemove({"_id" : "5b23762f6bc0f6d11b9ff1f1"}).then((todo) => {
	console.log(todo);
})