const   express = require('express'),
        bodyParser = require('body-parser'),
        port = 3000,
        usersCtrl = require('./usersCtrl')
        app = express();

app.use(bodyParser.json());

//endpoints
app.get('/api/users', usersCtrl.allUsers)
app.get('/api/users/:id', usersCtrl.userId)
app.get('/api/admins', usersCtrl.getAdmins)
app.get('/api/nonadmins', usersCtrl.notAdmins)
app.get('/api/user_type/:type', usersCtrl.getByType)
app.put('/api/users/:id', usersCtrl.updateUser)
app.post('/api/users', usersCtrl.addUser)
app.delete('/api/users/:id', usersCtrl.deleteUser)



app.listen(port, () => console.log(`Listening on ${port}`))