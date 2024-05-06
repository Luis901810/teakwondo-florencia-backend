

const server = require ("./src/server.js");
const { conn } = require("./src/db.js")
const PORT = process.env.PORT || 3001;


server.listen(PORT, async()=>{
    await conn.sync({
        alter: false
    })
    console.log("servidor escuchando el puerto:", PORT);
})