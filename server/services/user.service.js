const { User } = require('../modules/user')


const findUserByEmail = async(email) => {
    return await User.findOne({email});
}


module.exports = {
    findUserByEmail
}