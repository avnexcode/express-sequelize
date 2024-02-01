import User from "../models/UserModel.js"


export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll()
        res.status(200).json(response)
    } catch (err) {
        console.log(err.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({ where: { id: req.params.id } })
        res.status(200).json(response)
    } catch (err) {
        console.log(err.message)
    }
}

export const createUser = async (req, res) => {
    try {
        const user = req.body
        await User.create(user)
        res.status(200).redirect('/users')
    } catch (err) {
        console.log(err.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } })
        if (user) {
            await User.destroy({ where: { id: req.params.id } })
        }
        res.redirect('/users')
    } catch (err) {
        console.log(err)
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = {
            name: "MOKONDO",
            email: "marsudi@gugel.ahah",
            phone: "1233214566545",
            password: "dor dor dor"
        }
        await User.update(user, { where: { id: req.params.id } })
        res.redirect('/')
    } catch (err) {
        console.log(err.message)
    }
}