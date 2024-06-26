import { Sequelize } from 'sequelize';
import 'dotenv/config'


//'database', 'username', 'password'
const sequelize = new Sequelize(process.env.PG_NAME, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST,
  dialect: "postgres",
  // se não colocar o define ele gera tabelas de data de criação e alteração 
  define: {
    timestamps: false
  },
  logging: false // não retorna oo teste de conexão 'SELECT 1+1 AS result'
}
)

// Test connection and log errors
sequelize.authenticate()
  .then(() => {
    logger.info('Conexão realizada com sucesso!.');
  })
  .catch(err => {
    logger.error(`Não foi possível conectar ao bango de dados!: ${err.message}`);
  });

export default sequelize