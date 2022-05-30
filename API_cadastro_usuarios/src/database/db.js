import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const dbName = process.env.SEQUELIZE_DATABASE;
const dbUser = process.env.SEQUELIZE_USERNAME;
const dbPassword = process.env.SEQUELIZE_PASSWORD;
const dbHost = process.env.SEQUELIZE_HOST;
const dialect = process.env.SEQUELIZE_CONNECTION_DIALECT;

const conn = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dialect,
    // query: { raw: true }
})

conn.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!')
}).catch((err) => {
    console.error("Erro: Falha na conexão com o banco de dados. " + err)
})


export default conn