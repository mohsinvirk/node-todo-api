const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id:10
};
const token = jwt.sign(data,'abc123');
console.log('====================================');
console.log(token);
console.log('====================================');
const decoded = jwt.verify(token, 'abc123');
console.log('====================================');
console.log(decoded);
console.log('====================================');



// const message = 'I am User Number 3';
// const hash = SHA256(message).toString();

// console.log('====================================');
// console.log(`Message : ${message}`);
// console.log('====================================');

// console.log('====================================');
// console.log(`SHA256 : ${hash}`);
// console.log('====================================');