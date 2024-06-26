import express from 'express'
import {
    registerUser,
    getUserById,
    getUsers,
    updateUserById,
    removeUserById
} from '../controller/userController.js'

const router = express.Router();

router.route('/').post(registerUser).get(getUsers)
router.route('/:id').get(getUserById).put(updateUserById).delete(removeUserById);

export default router;