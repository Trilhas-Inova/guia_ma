import express from "express";
import DestinoController from "../controller/destinoController.js";


const routes = express.Router();

routes.get("/destinos", DestinoController.listarDestinos);
routes.get("/destinos/:id", DestinoController.listarDestinoPorId);
routes.post("/destinos", DestinoController.cadastrarDestinos);


export default routes;