const Users = require('../model/models')

const getAllUsers = async (req, res) => {

    let AllUser = await Users.find({})
    res.send(AllUser)
}

const deleteUser = async (req, res) => {

    let id = req.params.id
    let deleteduser = await Users.findByIdAndDelete({ _id: id })

}

const postUser = async (req, res) => {
    let newuser = new Users(req.body)
    newuser.save()
}

module.exports = { getAllUsers, deleteUser, postUser }