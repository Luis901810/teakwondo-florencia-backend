const { Router } = require("express")
const router = Router()
const userDelete = require("../../controllers/controllerUser/controllerdelectedUser")


router.delete("/:id", userDelete) 

module.exports = router;