import "dotenv/config"
import app from "./src/app.js";

// Se quiser configurar opções específicas de CORS


// Se quiser configurar opções específicas de CORS

const PORT = 443;

// const server = http.createServer((req,res) => {

//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url])
// });


app.listen(PORT,() => {
    console.log("Servidor rodando na porta 3000");
});
