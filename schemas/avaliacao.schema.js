import mongoose from "mongoose";

const AvaliacaoSchema = new mongoose.Schema(
    {
        nome: String,
        nota: Number,
        avaliacao: String

    }, {collation: "LivroInfo"}
)


export default AvaliacaoSchema