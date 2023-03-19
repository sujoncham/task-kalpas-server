const express = require('express');
const { deleteUser, getUserDetail, createUser, getAllUsers } = require('../controllers/user.controller');
const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.post('/createNews', createUser)
userRouter.get('/:id', getUserDetail)
userRouter.delete('/:id', deleteUser)


module.exports = userRouter;