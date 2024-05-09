require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env; 

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    },
);


    (async() =>{
        try {
        await sequelize.authenticate();
        console.log("La conexion se ha establecido correctamente");
    } catch (error) {
    console.error("Error al conectar con la DB:", error)
    }
})();
    

require("./models/relacionesDB")(sequelize)

module.exports = {

    ...sequelize.models,
    conn: sequelize,
}