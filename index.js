import express from 'express'
import cors from 'cors'
import winston from 'winston'

import clientesRouter from './routes/cliente.route.js'
import autorRouter from './routes/autor.route.js'
import livroRouter from './routes/livro.route.js'
import vendaRouter from './routes/venda.route.js'


import 'dotenv/config'



const { combine, timestamp, label, printf } = winston.format

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'logs/logs.log' })
    ],
    format: combine(
        label({ label: 'livraria-online' }),
        timestamp(),
        myFormat
    )
})


const app = express()
app.use(express.json())
app.use(cors())


// rotas=========================
app.use('/cliente', clientesRouter)
app.use('/autor', autorRouter)
app.use('/livro', livroRouter)
app.use('/venda', vendaRouter)


// middleware de erros para salvar no logger
app.use((err, req, res, next) => {
    logger.error(`Erro: ${req.method} ${err.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})


app.listen(process.env.PORT, () => {
    // console.log('rodando na porta 3000!')
    logger.info(`API Started! PORT: ${process.env.PORT}`)

})