import express from "express"
import { getUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users/create', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router