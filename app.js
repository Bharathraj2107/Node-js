const http=require('http');//we are creating the server only 1 time  and we should not change the server at some point of time so we are using the constant to use http model in node js we use the function called require//require('./http')// if we do like this then it will search http file in the current directory if we give only the http then it will bring it from  the node core module itself it will bring the http and put it as object inside the const http
const fs=require('fs');//we are using the fs module to read and write files in node js
// function rqListener(req){//req means incoming message that came to the server will be stored there to handle the request can be done within the function and after doing it we have to send the response to the browser we can do it using the res obkect
//   console.log(req);
// }
const server=http.createServer((req,res)=>{
    //console.log(req.url);//req.url we get only / in the terminal when we type localhost:3000 in the url means there is only root url 3000 and there is no other thing in the url when we give /test we get /test in the terminal
    //console.log(req.method) we get methods like GET,POST
    //console.log(req.headers)//like wht browser we are using and some other details like user agent and accept language and some other details
    const url=req.url;//here we are getting the url from the request object and we are assigning it to the url variable
    const method=req.method;
    if(url=='/'){
        res.setHeader('Content-Type','text/html');//here we are setting the header for the response object and we are sending the content type as html to the browser and we are sending the response to the browser in html format
        res.write('<html>')
        res.write('<head><title>Enter Form details</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')//after submitting the form it will have url like /message 
        res.write('</html>')
         return res.end()
    }
    //redirecting the requests say initially we sending  request to the server in localhost:3000 we are getting the form and we are submitting the from then it is submitted with localhost/message and we are redirecting this request to some url
    if(url==='/message' && method == 'POST'){
        const body=[];//to gather all the parts of chunk data into 1  finally we use body and empty array ot store the data 
        req.on('data',(chunk)=>{//The input data which we sent in the input field of the form will be stored in the chunk variable and we get the input data part by part in the chunk
            // console.log('Chunk:');
            // console.log(chunk);//we get this chunk data stored in the buffer format in hexadecimal .Buffer means some place in the computer where the data is stored
            body.push(chunk);
            console.log(chunk)
        })//to get the data what we have sent in the input box we are using on('data') method and we are getting the data in chunks and we are using the on('end') method to get the data when the data is completely received and we are using the Buffer class to convert the data into string and we are using the writeFileSync method to write the data to the file
         req.on('end',()=>{//node js will send the end event when the data is completely sent that is req.on('data')
            const parsedBody=Buffer.concat(body).toString()//Buffer is global object and after concatinating it we are converting it to string bcoz we sent the string data To merge the chunk data into 1 parse means can be changed means the chunk data collected in the body array is completely merged and converted
             //console.log(parsedBody);
             const message=parsedBody.split('=')
             fs.writeFileSync('hello.txt',message[1])//here we are creating the file name hello.txt and inside that we are adding the message[1] meaning the data we entered in the text box and we are using the writeFileSync method to write the data to the file and if the file is not present then it will create a new file and write the data to that file and if the file is present then it will overwrite the data in that file with the new data 
        })
        fs.writeFileSync('hello.txt','Dummy')//here we are writing the file hello.txt and we are writing the data Dummy to the file hello.txt and if the file is not present then it will create a new file and write the data to that file and if the file is present then it will overwrite the data in that file with the new data Dummy
        res.setHeader('Location','/')
        res.statusCode=302// based on the status code the browser will decide what to do 302 means we are redirecting the request to some other url and we are sending the response to the browser and we are redirecting the request to the url / so when we submit the form it will redirect to / and it will show the form again.Based on the status code only we are redirecting.
        return res.end();//we are ending the response here so that the browser will not wait for the response after that we should not use the write method and we are using return statement to stop the execution of the code after this line and we are ending the response here so that the browser will not wait for the response after that we should not use the write method
    }//if we keep only the res.end and ather are pushed to req.on('end ) then for the request the response is sent and the only dummy word will be in the hello.txt and statius 302 will not work and will not be redirected

    res.setHeader('Content-Type','text/html');//here we are setting the header for the response object and we are sending the content type as html to the browser and we are sending the response to the browser in html format
    res.write('<html>')
    res.write('<head><title>JVLcode Tutorial</title></head>')
    res.write('<body><h1>Hello from Nodejs server</h1></body>')
    res.write('</html>')
    res.end()//we are ending the response here so that the browser will not wait for the response after that we should not use the write method
    //process.exit();//this is used to stop the server and exit the process and it will not wait for the request to be completed and it will exit the process immediately we are stopping the listener
    //for all the browser urls the response remains the same so based on the url we can change the response 
    //here in with the help of chrome we are sending the request to the server(in chrome url localhost:3000) here we are seeing the req in console so we get  the details like localhost,which browser and some more details about that
});// here the createserver takes the rqListener function  creates the server and assigns the value to the  const server the rqListener function is called  when the request is made to the server within the application when the function is called it sends 2 parameters to the above function the first parameter is the request object and the second parameter is the response object to handle every request that comes to the server so we keep the server constant
server.listen(3000);//the server will be listening some port number and if any request comes to that port number then the server will be created and the request will be handled by the rqListener function and the response will be sent to the browser