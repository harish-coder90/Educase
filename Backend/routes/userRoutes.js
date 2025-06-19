import express from 'express'
const router = express.Router()
import {registerUser, loginUser} from '../controllers/userController.js'
import  uploadImg from '../controllers/accountSetting.js'

router.post("/signup", registerUser )

router.post("/login",  loginUser)

router.post("/upload",  uploadImg)

export default router