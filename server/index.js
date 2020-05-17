require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

// const http = require('http'); //
// const server = http.Server(app);

// const socketIO = require('socket.io');
// const io = socketIO(server); //

var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/auth', routes.auth);
app.use('/courses', routes.courses);
app.use('/category', routes.category);

app.use('/students', routes.students);

app.use('/teachers', routes.teachers);
app.use('/video', routes.videos)


io.on('connection', (socket) => { //
    console.log('user connected');
});
io.on('new-message', (message) => {
    io.emit(message);
}); //
const port = process.env.PORT || 8080;
http.listen(port, () => { // replaced app by http
    console.log(`listening on port ${port}`);
});