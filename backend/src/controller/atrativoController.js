import Atrativo  from "../models/Atrativo.js";
import { Destino } from "../models/Destino.js";

class AtrativoController {

    static async listarAtrativos(req, res){
        const listaAtrativos = await Atrativo.find({});
        res.status(200).json(listaAtrativos);
    }

    static async cadastrarAtrativo(req, res){
        const novoAtrativo = req.body;
        console.log(novoAtrativo.destino);
        try {
            const destinoExistente = await Destino.findById(novoAtrativo.destino);
            const atrativoCompleto = {...novoAtrativo, destino: {
                ...destinoExistente._doc
            }};
            const resultAtrativo = await Atrativo.create(atrativoCompleto);
            res.status(201).json({message:"atrativo criado com sucesso", atrativo: resultAtrativo});
        } catch (error) {
            res.status(500).send(`${error.message} - erro ao cadastrar o atrativo`)
        }
    }

    static async buscarPorDestinoId(req, res){
        const { destinoId } = req.params;
        try {
            const listAtrativos = await Atrativo.find({ destino: destinoId });
            console.log(listAtrativos)
            res.status(200).json(listAtrativos);
        } catch (error) {
            res.status(500).send(`${error.message} - erro ao cadastrar o atrativo`)
        }
    }
}   

export default AtrativoController;