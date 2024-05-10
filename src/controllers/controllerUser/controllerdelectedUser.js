const handlerDeletedUser = require("../../handles/handlerUser/handlerDeletedUser");

module.exports = async( req, res ) =>{
    try {

    const userId = req.params.id
    const hardDelete = req.body.hardDelete || false
    const deleteType = req.body.deleteType || "id"
    const deleteOptions = {}

    if(deleteType === "id") deleteOptions.where = { id: userId}
    if(deleteType === "email") deleteOptions.where = { email: userId}

    const { error, msg } = await handlerDeletedUser(deleteOptions, hardDelete)
    if(error){
        res.status(400).json({ error: msg })
    }

    return res.json({
        message: "usuario eliminado correctamente",
        deleteType,
        hardDelete
    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: message })
        
    }
    
}