const udp = require('dgram');
const server = udp.createSocket('udp4');
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://0.0.0.0:27017";
// const initializePassport = require('./passport-config');
// const flash = require('express-flash');
// const session = require('express-session');
// const methodOverride = require('method-override')
// const assert = require("assert");



// app.use(methodOverride('_method'))
// const users = [];
// initializePassport(
//     passport,
//     UserName => users.find(user => user.UserName === UserName),
//     id => users.find(user => user.id === id)
// )
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

//mongo data base 
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017";
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("MongoDataBase");
//     dbo.dropDatabase(function (err, result) {if (err) throw err;});
//     // dbo.createCollection("advertisements", function (err, res) { if (err) throw err; });
//     dbo.createCollection("usersData", function (err, res) { if (err) throw err; });
//     const admin = {id: "1", UserName: "ariel", password: '123456'}
//     dbo.collection("usersData").insertOne(admin, function (err, res) { if (err) throw err; });
//     dbo.close;
// });

server.on('error',function(error){
    console.log('Error: ' + error);
//    server.close();
});

server.on('message',function(msg,info){
    message=msg.toString();
    console.log('Data received from client : ' + message);
    const splitedmessage=message.split(',');
    const command = splitedmessage[0];
    console.log('command: ' + command);
    switch(command)
    {
        case 'login':
            console.log('switch case login statement');
            login(splitedmessage[1],splitedmessage[2]);
            break;
        case 'register':
            console.log('switch case register statement');
            register(splitMessage[1], splitMessage[2], info);
            break;    
        case 'sensor':
            sensor(splitedmessage[1],info.address,splitedmessage[2])
            console.log('switch case sensor input data statement');
            
            default:
                console.log('default statement');
    }
    // MongoClient.connect(url, function (err, db) {
    //     var dbo = db.db("MongoDataBase");
    //     var query = { UserName: screenName };
    //     dbo.collection("advertisements").find(query).toArray(function (err, result) {
    //         if (err) throw err;
    //         socket.emit('getData', result);
    //     });


    // server.send("Got Your message",info.port,'localhost');
    // if(info.address === "192.168.1.18")
    //     server.send("Alert",info.port,'192.168.1.18');
});
function login(username,password,userip)
{
    // initializePassport(
    //     passport,
    //     UserName => users.find(user => user.UserName === UserName),
    //     id => users.find(user => user.id === id)
    // )
    //     // update current user IP in DB
    //     MongoClient.connect(url, function (err, db) {
    //         assert.equal(null, err);
    //         const dbo = db.db("WavesSavesDataBase");
    //         dbo.collection('users').updateOne({"userName": username,}, {$set: {IP: userIP}}, function (err) {
    //             assert.equal(null, err);
    //         });
    //     });
    console.log('username: ' +username);
    console.log('password: ' +password);
}
function register(username, password, info){
    // const user = {
    //     userName: username,
    //     password: password,
    //     IP: userIP
    // };
    // MongoClient.connect(url, function (err, db) {
    //     assert.equal(null, err);
    //     const dbo = db.db("WavesSavesDataBase");
    //     const cursor = dbo.collection('users').find({userName: username});
    //     // if exists : return not ok msg
    //     // else insert and return ok
    //     dbo.collection("users").insertOne(user, function (err, res) {
    //         if (err) throw err;
    //         server.send("OK", info.port, info.address)
    //     });
    // });
    // console.log('username: ' +username);
    // console.log('password: ' +password);
}
function sensor(sensorname,id,totaldata)
{
    // MongoClient.connect(url, function (err, db) {
    //     assert.equal(null, err);
    //     const dbo = db.db("WavesSavesDataBase");
    //     const cursor = dbo.collection('sensors').find({_id: info.address});
    //     cursor.forEach(function (doc, err) {
    //         for (let i = 0; i < doc.usersIP.length; i++)
    //             sendAlert(doc.usersIP.get(i), info);
    //     })
    //  });
}

function sendAlert(userIP, info){
    server.send("ALERT",info.port,userIP);
    console.log('message sent to client: ' + userIP);
}
server.on('listening',function(){
    let address = server.address();
    let port = address.port;
    let ipaddr = address.address;
    console.log('Server is listening at port ' + port);
    console.log('Server ip :' + ipaddr);

});

server.on('close',function(){
    console.log('Socket is closed !');
});

server.bind(20001, "0.0.0.0");

// setTimeout(function(){
//     server.close();
// },8000);
