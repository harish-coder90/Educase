import express from 'express'
import multer from 'multer'
import path from 'path'
import  uploadImg from '../controllers/accountSetting.js'
import validateToken  from '../middlewares/autoMiddleware.js'

const router = express.Router()



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

const upload = multer({ storage: storage });

router.post("/profile", validateToken, upload.single("profileimg"), uploadImg );

export default  router;
