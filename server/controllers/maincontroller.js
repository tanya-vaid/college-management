const User = require('../models/user')
exports.login = async (req, res) => {
    const email = req.params.email 
    const fuser = await User.findOne({ where: { email: email } })
     
    res.send(fuser)

}