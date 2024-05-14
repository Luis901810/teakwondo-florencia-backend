const { Router} = require("express")

const mainRouter = Router()

const user = require("./userRouter/user")

// ruta de manejo de exito
mainRouter.get( "/", (req, res) =>{
    res.send("Bienvenido a la base de datos de Teakwondo")
})

// rutas del server 

mainRouter.use("/user", user)

// manejo de rutas no encontradas

mainRouter.use((req, res) =>{
    res.status(404).send(`Ruta no encontrada: ${req.method} ${req.originalUrl}`)
})





module.exports = mainRouter;