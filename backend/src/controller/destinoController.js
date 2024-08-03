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
}   

export default DestinoController;