import { Destino } from "../models/Destino.js";


class DestinoController {

    static async listarDestinos(req, res){
        const listaDestinos = await Destino.find({});
        res.status(200).json(listaDestinos);
    }

    static async cadastrarDestinos(req, res){
        try {
            const novoDestino = await Destino.create(req.body);
            res.status(201).json({message:"destino criado com sucesso", destino: novoDestino});
        } catch (error) {
            res.status(500).send(`${error.message} - erro ao cadastrar o destino`)
        }
    }

    static async listarDestinoPorId(req, res){
        const id = req.params.id;  
        const destinoEncontrado = await Destino.findById(id);
        if(destinoEncontrado !== null){
            res.status(200).json(destinoEncontrado);
        }
        res.status(404).send("Destino não encontrado");
    }
}   

export default DestinoController;