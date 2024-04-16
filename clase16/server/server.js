const http = require('http')

http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead("200", { "Content-Type": "text/html" });
        res.end('<h1 style="color: blue"> Home </h1>');
    } else if(req.url === "/contacto"){
        res.writeHead("200", { "Content-Type": "text/html" });
        res.end('<h1 style="color: green"> Contacto </h1>');
    } else {
        res.writeHead('200', {'Content-Type': 'text/html'})
        res.end('<h1 style="color: green"> :( 404 url no encontrada </h1>')
    }
})
.listen(8080, ()=>{
    console.log("Servidor corriendo en el puerto 8080")
})
