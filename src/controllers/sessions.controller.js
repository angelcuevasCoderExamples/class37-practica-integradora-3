class SessionsController {
    static async register(req, res){
        res.send({status:'success', message:'User registered successfuly'})
    }
    static async handleRegisterFail(req, res){
        res.status(400).send({status:'error', error:'There has been a problem with the register process'})
    }
    static async login(req, res){
        const {_id, first_name, last_name, role, email} = req.user; 
        req.session.user = {
            id: _id, 
            first_name,
            last_name,
            role, 
            email
        }
        res.send({status:'success', message:'User logged successfuly'})
    }
    static async handleLoginFail(req, res){
        res.status(400).send({status:'error', error:'There has been a problem with the login process'})
    }
}

module.exports = SessionsController; 