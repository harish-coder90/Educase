import fs from 'fs'
import User from '../models/userModel.js'

const uploadImg = async (req, res) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" })
    }

    const userId = req.user.id; 
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const imgPath = `/uploads/${req.file.filename}`;
    user.profileimg = imgPath;
    await user.save();

    res.status(200).json({
      message: "Profile image uploaded successfully",
      profileimg: imgPath
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export default uploadImg
