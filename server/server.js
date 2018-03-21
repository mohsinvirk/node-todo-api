const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./model/todo');
const { Users } = require('./model/users');

const app = express();
const port= process.env.PORT;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!toodo) {
            return res.status(404).send();

        }
        res.send({ todo });
    })

}).catch((e) => {
    res.status(400).send();
});



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});