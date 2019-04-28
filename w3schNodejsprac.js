// hello world in browser/ and module  prac("MAKE IT FUN LOL") :
// ex 0
var http =require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end(' Hello World');

}).listen(8080);

// ex 1
var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end('welcome back to lyoko kyle');
}).listen(8080);

// ex 2
var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end('(me) how are you doing Aleita? i am still working on your materialization.' );
  //console.log("i hope you can forgive me Aleita. (Aleita) i understand my sweet no need to rush atm");
}).listen(8080);


// ex 3
var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end('how was cyberspace today alieta? did you miss me lol? (aleita) it was same as usual');
  //onsole.log(" and it is lonely with you not here sometimes");
  //console.log(" i'll come online more often then");
}).listen(8080);


// ex 4
var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end('good afternoon Aleita did u sleep well?');
  //console.log(" yes i did kyle. you BETTER be STUDYING DAILy");
}).listen(8080);

// ex 5
var http = require('http');
var createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end(" sorry Aleita. i keep procrastinating but ill do better from now on i swear");
  //console.log("u better lol. btw u need to get your ID , and Social Security Card and insurance card asap");
  //console.log("yes ma'am");
}).listen(8080);




// Create Files w/ the file System is below :

// fs.appedFile()
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    // or file i choose to create
  if (err) throw err;
  console.log('Aleita make a new file with fs.appendFile method');
});

// ex 0



  // fs.open()
  var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    // or file i choose to create
  if (err) throw err;
  console.log('Saved!');
});

// ex 0



    // fs.writeFile()
    var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      // or file i choose to create
      if (err) throw err;
      console.log('Aleita make a new file with fs.write method');
    });

    // below is Update Files :

    // fs.appendFile()
    var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  //or file i choose to update
  if (err) throw err;
  console.log("Aleita update this file for me");
  console.log("yes sir");
  console.log('Updated!');
});

// fs.writeFile()
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  // or file i choose to update
  if (err) throw err;
  console.log('Replaced!');
});

// ex 0



// below is "Deleting Files":
// the fs.unlink() method deletes a file :

//ex 0
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  // or file i choose to Delete
  if (err) throw err;
  console.log('File deleted!');
});

// ex 1


 // below is "Nodejs URL Module" :
 // Save as " demo_url.js" and run in the console

 var url = require('url');
 var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
 //Parse the address:
 var q = url.parse(adr, true);

 /*The parse method returns an object containing url properties*/
 console.log(q.host);
 console.log(q.pathname);
 console.log(q.search);

 /*The query property returns an object with all the querystring parameters as properties:*/
 var qdata = q.query;
 console.log(qdata.month);

 // Below is practice :
 // ex 1
