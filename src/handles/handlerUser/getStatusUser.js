const { UserStatus } = require("../../db")

module.exports = async(options = {})=>{
    try {
        return await UserStatus.findAll(options)
    } catch (error) {
        console.log("Error al buscar el estatus del usuario");
        throw new Error ("Error al buscar el status del Usuario")
    }
}