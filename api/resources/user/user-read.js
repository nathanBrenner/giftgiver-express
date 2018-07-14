const { readFileSync } = require('fs');

// readFileSync('./user.graphql', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// })
const schema = readFileSync(__dirname + '/user.graphql', 'utf8')
console.log('user', schema)