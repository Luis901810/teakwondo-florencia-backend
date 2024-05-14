
const jwt = requirw("jsonwebtoken")

module.exports = async( req, res ) =>{
    try {
        // validar la creacion del usuario requiera login
        req.body.login = req.body.login !== false // login required for defauld 

        // create user
        const {
            user: newUser, 
            error,
            msg,
            role, // requerido para crear token
            } = await createUser({
                ...req.body,
                requiredUserName: req.body.requiredUserName !== false,
                requiredUserPassword: req.body.requiredUserPassword !== false,
                requiredphoneNumber: req.body.requiredphoneNumber !== false,
                includeDeleted: req.body.includeDeleted || false,
            })
            if(error) return res.status(400).json({ error: msg})

            if(req.body.login){
                // generando token
                const token = jwt.sign({ id: newUser.id, role: role?.rol}, process.env.JWT_SECRET,{
                    expiresIn: 60*60*24*6,
                })

                res.status(201).json({
                    auth: true,
                    token,
                    user: newUser
                })
            } else{
                res.status(201).json({ user: newUser})
            }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message})
        
    }
} 