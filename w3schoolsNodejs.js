

npm // "Hello World" in the browser !!

// usually goes in my actual web app file


var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.end(' Hello World');

}).listen(8080);

// below is "Modules" : THE ABOVE CODE IS ALSO A "MODULE" pretty much .

/* modules are the same as js libraries.
a set of Functions you want to include in your application */



/* to include a 'Module'  use "require()"  var http = require('http');
now the application can create a 'server' and has access to the HTTP module */

// my own 'Module'  this one returns current Date/Time
exports.myDateTIme = function () {
  return Date();
};

// "my 1st Module" is below : Note That "THIS IS AN EXAMPLE OF A MODULE"
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/html'});
  res.write("the current date and time are :" +
dt.myDateTIme());
res.end();
}).listen(8080);// save this code in a file called demo_module.js  and run it.


// below is "demo_http.js" and figure out how i would run it


var http = require('http');

// create server object
http.createServer(function(req, res){
  // add this(below comment) if its to be displayed as 'HTML'
  // res.writeHead(200, {'content-typ' : 'text/html'});
  res.write('Hello world! ');// write a respnse to the client
  //or 'req.url' in order to read 'query string' instead of 'Hello World!'
  res.end();// end the response
}).listen(8080);//server object now listens to port 8080

// below is "File System Module"   as well as "Read Files" :

/*Create a Node.js file that
 reads the HTML file, and return the content: */
 var http = require('http');
 var fs = require('fs');
 http.createServer(function (req, res) {
   fs.readFile('demofile1.html', function(err, data) {/* or file chosen  ??? instead of 'demofile'.html */
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
     res.end();
   });
 }).listen(8080);// save in a file as. and run as "demo_readfile.js" in the console




// Create Files w/ the file System is below :

// fs.appedFile()
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    // or file i choose to create
  if (err) throw err;
  console.log('Aleita make a new file with fs.appendFile method');
});


  // fs.open()
  var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    // or file i choose to create
  if (err) throw err;
  console.log('Saved!');
});

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

// below is "Deleting Files":
// the fs.unlink() method deletes a file :

//ex 0

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  // or file i choose to Delete
  if (err) throw err;
  console.log('File deleted!');
});


// below is Renaming Files :  by using the fs.rename() method
// it renames the file i choose
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

// below is the "Nodejs URL Module" :
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



// next is the "Nodejs File server" : in a separate Folder/dir( " study from that");
