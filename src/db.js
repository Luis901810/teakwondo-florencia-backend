require("dotenv").config();
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: "postgres",
    logging: false,
    ssl: true, // Siempre establecido en true
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Puedes ajustar esto según la configuración de tu servidor PostgreSQL
      },
    },
  });

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