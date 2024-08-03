import express from "express";
import destinos from "./DestinoRoutes.js";
import atrativos from "./AtrativoRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));
    app.use(express.json(), destinos)
    app.use(express.json(), atrativos)
}

export default routes;