const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
// var id = '6b222640add11bc74b98ce74';

// if (!ObjectID.isValid(id))
// {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('todo by id', todo);
// }).catch((e) => console.log(e));

// user.findById
var id = '5b220d0b99690460fb3f2281';
User.findById(id).then((user) => {
	if(!user) return console.log('Id not found');

	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));