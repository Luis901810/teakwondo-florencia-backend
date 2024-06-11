const { User, UserRol } = require("../../db");
const finduserByEmail = require("./findByEmail")
const findUserByPhoneNumber = require("./findUserByphoneNumber")

module.exports = async payload =>{
    const {
        name,
        email,
        phoneNumber,
        password,
        birthDate,
        profilePinture,
        genderId,
        roleId,
        statusId,
        authMethodId,
        requiredUserPassword,
        requiredUserName,
        requiredNumber,
        includedeleted,
        firesbaseUid,

    } = payload

    // crea usuarios new los guarda en datos de usuarios
    const userData = {};

    // validador de existencia
    if(requiredUserName) {
        if(!name){
            return { error: true, msg: "usuario debe tener un nombre."}
        }
        userData.name = name;
    }
    if(requiredUserPassword){
        if(!password){
            return { error: true, msg: "usuario debe tener una contraseña."}
        }
        userData.password = password;
    }
    if(requiredNumber){
        if(!phoneNumber){
            return {error: true, msg: "usuario debe tener un numero de telefono."}
        }
        const userFoundByphoneNumber = await findUserByPhoneNumber(phoneNumber, includedeleted)
        if(userFoundByphoneNumber) {
            return { error: true, msg: "El numero de telefono ya existe. "}
        }
        userData.phoneNumber = phoneNumber
    }
    if(!email){
        return { error: true, msg: "debes tener un correo electronico. "}
    }
    if(email) {
        const userFoundByEmail = await finduserByEmail( email, includedeleted)
        if( userFoundByEmail){
            return{ error: true, msg: "el correo ya existe"}
        }
        userData.email = email;
    }

    userData.birthDate = birthDate
    userData.profilePinture = profilePinture
    userData.roleId = roleId
    userData.genderId = genderId
    userData.statusId = statusId
    userData.authMethodId = authMethodId
    userData.firesbaseUid = firesbaseUid

    let role = null 
    if(payload.login && roleId){
        role = await UserRol.findByPk(roleId)
        if(!role) {
            return { error: true, msg: "El usuario no existe. "}
        }
    }

    const newUser = await User.create(userData)
    return {
        error: true, user: newUser, role
    }

}