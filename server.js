const udp = require('dgram');
const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const server = udp.createSocket('udp4');


//mongo data base 
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://0.0.0.0:21771";
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
        case 'sensor':
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
function login(username,password)
{
    console.log('username: ' +username);
    console.log('password: ' +password);
}
function sensor(sensorid,x,y,z)
{
    
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
