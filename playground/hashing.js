const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var password = '123abc!';
// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	})
// });

// var hashedPassword = '$2a$10$J3HZ/v5vBSTf1rKqjbMlguRh35/FRT6TluwhlevDAJ2Rl5o6jfGOi';
// bcrypt.compare(password, hashedPassword, (err, res) => {
// 	console.log(res);
// })


// var data = {
// 	id: 10
// };


// var token = jwt.sign(data, '123abc').toString();
// console.log(token);
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var token2 = jwt.sign('10', 'abc123');
// console.log(token2);
// var message = 'i am user number 1';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed. Do not trust!');
// }
