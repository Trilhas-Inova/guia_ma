import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome: {type: String, require:true},
    imagemUrl: {type: String},
    longitude:{type:Number},
    latitude:{type:Number}
},{versionKey:false});

const Destino  = mongoose.model("destinos", destinoSchema);


export {Destino, destinoSchema};

