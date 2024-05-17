module.exports = sequelize =>{
    
// importar y definir modelos 
require("./User/UserRol")(sequelize)
require("./User/User")(sequelize)
require("./User/UserGender")(sequelize)
require("./User/UserAuthMethod")(sequelize)
require("./User/UserStatus")(sequelize)
const {
    User,
    UserRol,
    UserGender,
    UserAuthMethod,
    UserStatus
} = sequelize.models



    // relaciones de modelos de usuarios
UserRol.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(UserRol, { foreignKey: "roleId" });

UserGender.hasMany(User, { foreignKey: "genderId"});
User.belongsTo(UserGender, { foreignKey: "genderId"})

UserStatus.hasMany(User, { foreignKey: 'statusId' })
User.belongsTo(UserStatus, { foreignKey: 'statusId' })

UserAuthMethod.hasMany(User, { foreignKey: 'authMethodId' })
User.belongsTo(UserAuthMethod, { foreignKey: 'authMethodId' })

}

