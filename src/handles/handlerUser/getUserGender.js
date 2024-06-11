const { UserGender } = require("../../db");

module.exports = async ( options = {}) =>{
    try {
        return await UserGender.findAll(options)
        
    } catch (error) {
        console.log("Error al buscar el genero del usuario", error);
        throw new Error("Error al buscar el genero del usuario")
        
    }
}