import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Enter full name"],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"],
  },
  password: {
    type: String, // Hashed password will be stored
    required: [true, "Password is required"],
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
  },
  agency: {
    type: Boolean,
    required: [true, "Please specify if you're an agency"],
  },
  profileimg: {
    type: String, 
    default: "",  
  },
}, {
  timestamps: true, // Automatically adds createdAt & updatedAt
});

const User = mongoose.model("User", userSchema);
export default User;
