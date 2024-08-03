import express from "express";
import conexaoDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

import cors from "cors";



const app = express();
app.use(cors());
routes(app);
const conexao = await conexaoDb();

const corsOptions = {
    origin: '*',
  };

app.use(cors(corsOptions));


conexao.on("error", (erro) =>{
    console.log("Erro ao conectar", erro)
});

conexao.once("open", ()=>{
    console.log("Conexão estabelecida com sucesso");
});

export default app;