import mongoose from "mongoose";
import { destinoSchema } from "./Destino.js";

const atrativoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    tipo: {type: String},
    descricao: {type: String},
    destino: {type: mongoose.Schema.Types.ObjectId, ref: 'destinos'},
},{versionKey:false});

const Atrativo  = mongoose.model("atrativos", atrativoSchema);

export default Atrativo ;
