// const http=require('http');//we are creating the server only 1 time  and we should not change the server at some point of time so we are using the constant to use http model in node js we use the function called require//require('./http')// if we do like this then it will search http file in the current directory if we give only the http then it will bring it from  the node core module itself it will bring the http and put it as object inside the const http
// const routes=require('./routes');//here we are importing the requestHandler function from the routes.js file and we are using the require function to import the function in the app.js file and we are using the requestHandler function to handle the request and response of the server
//  function rqListener(req){//req means incoming message that came to the server will be stored there to handle the request can be done within the function and after doing it we have to send the response to the browser we can do it using the res obkect
//    console.log(req);
//  }
// const server=http.createServer(requestHandler);//here we are creating the server and we are passing the requestHandler function to the server
//     console.log(routes.someText);
//     console.log('testing');
//     process.exit();//this is used to stop the server and exit the process and it will not wait for the request to be completed and it will exit the process immediately we are stopping the listener
//     for all the browser urls the response remains the same so based on the url we can change the response 
//     here in with the help of chrome we are sending the request to the server(in chrome url localhost:3000) here we are seeing the req in console so we get  the details like localhost,which browser and some more details about that
// const server=http.createServer(routes.handler);// here the createserver takes the rqListener function  creates the server and assigns the value to the  const server the rqListener function is called  when the request is made to the server within the application when the function is called it sends 2 parameters to the above function the first parameter is the request object and the second parameter is the response object to handle every request that comes to the server so we keep the server constant
// server.listen(3000);//the server will be listening some port number and if any request comes to that port number then the server will be created and the request will be handled by the rqListener function and the response will be sent to the browser
const http = require('http');
const routes = require('./routes')

console.log(routes.someText);
console.log('testing');

const server = http.createServer(routes.handler);
server.listen(3000);