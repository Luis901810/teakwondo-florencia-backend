const { User } = require("../../db");

module.exports = async(deleteOptions, hardDelete = false) =>{
    if (!hardDelete) deleteOptions.where.deletedAt = null

    const user = await User.findOne(deleteOptions)
    if(!user) {
        return { error: true, msg: "Usuario no encontrado"}
    }

    if(hardDelete) {
        await user.destroy()
    } else{
        await user.update({deletedAt: new Data()})
    }
    return { error: false}
}