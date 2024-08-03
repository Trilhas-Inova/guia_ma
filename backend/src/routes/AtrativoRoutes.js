import express from "express";
import AtrativoController from "../controller/atrativoController.js";


const routes = express.Router();

routes.get("/atrativos", AtrativoController.listarAtrativos);
routes.get("/atrativos/:destinoId", AtrativoController.buscarPorDestinoId);
routes.post("/atrativos", AtrativoController.cadastrarAtrativo);


export default routes;