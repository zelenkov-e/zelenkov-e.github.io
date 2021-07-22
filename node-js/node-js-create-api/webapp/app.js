const express = require('express');
const fs = require("fs");

const app = express();
//only POST
const jsonParser = express.json();
const filePath = 'users.json';

app.use(express.static(__dirname + '/public'))

app.get('/api/getUsers', (req, res) => {
    const content = fs.readFileSync(filePath, 'utf-8')
    const users = JSON.parse(content)
    res.send(users)
})

app.post('/api/createUser', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    let user = { name: userName, age: userAge };

    let data = fs.readFileSync(filePath, "utf8");
    let users = JSON.parse(data);

    const id = users.length + 1;
    user.id = id;
    users.push(user);
    data = JSON.stringify(users);
    //re-write users.json
    fs.writeFileSync("users.json", data);
    res.send(user)
})

app.delete('/api/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let users = JSON.parse(data);
    let index = -1;
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        const user = users.splice(index, 1)[0];
        data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else {
        res.status(404).send();
    }
})

app.listen(3000, () => {
    console.log('Server is wating to connect ...')
})