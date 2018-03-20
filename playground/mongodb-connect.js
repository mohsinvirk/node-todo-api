const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
const mineDb = db.db('TodoApp');

mineDb.collection('Users').find({name:'Mohsin'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err)=> {
    console.log(`Error log is ${err}`);
    
});


// mineDb.collection('Todos').find({completed:true}).toArray().then((docs)=> {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
    
// }, (err)=> {
//     console.log(`Error is ${err}`);
    
// });

    // db.close();
});
