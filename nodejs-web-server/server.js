const { Console } = require('console');
const http = require('http');

/*
const requestListener = (request,response) => {

    response.setHeader('content-type', 'text/html');

    response.statusCode = 200;
    const {method} = request
    if(method === 'GET'){
        
        response.end('<h1>iniget</h1>');
    }

    if(method === 'POST'){
 
        let body = [];
    
        request.on('data', (chunk) => {
            body.push(chunk);
        });
       
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            response.end(`<h1>Hai, ${body}!</h1>`);
        });
    }

    



    
};

*/



const requestListener = (request, response)=>{
    const {url,method}= request;

    if(url === '/'){
        if(method === 'GET'){
            response.end('<h1>INI HOMEPAGE CUY</h1>');
        }
        if (method === 'DELETE'){
            response.end('<h1>TIDAK BISA DI AKSES CUY</h1>');
        }


    }

    if(url ==='/about'){
        if(method === 'GET'){
            response.end('ini halaman about');


        }
    }


}














const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`server berjalan pada http://${host}:${port}`);


});