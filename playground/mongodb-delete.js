const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const mineDb = db.db('TodoApp');

       // DeleteMany
        // mineDb.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
        //     console.log(result);
            
        // });
       // DeleteOne
        // mineDb.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
        //     console.log(`Result: ${result}`);
            
        // })
       // FindOneAndDelete
       mineDb.collection('Todos').findOneAndDelete({completed:false}).then(result => console.log(`result: ${result}`));
    });
// {
//     text: "Eat Lunch",
//         completed: false
// }