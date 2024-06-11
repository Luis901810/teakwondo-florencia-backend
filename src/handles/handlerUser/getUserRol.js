const { UserRol } = require("../../db")

module.exports = async ( options = {}) =>{
    try {
        return await UserRol.findAll(options)
        
    } catch (error) {
        console.log("Error al buscar el Rol del Usuario");
        throw new Error("Error al buscar el Rol del Usuario");
    }
}