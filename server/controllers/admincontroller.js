const User = require("../models/user");


exports.change_password = async (req, res) => {
    
}

exports.pchange_password = async (req, res) => {
    const pp = req.body
    console.log(pp)
    await User.update({ password: pp.password }, { where: { name: 'admin' } })
    res.end()
};
