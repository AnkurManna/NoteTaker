const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter
.route('/')
.post(userController.createUser)

userRouter
.route('/:id')
.get(userController.getUser)
.patch(userController.modifyUser)
.delete(userController.deleteUser);
module.exports = userRouter;