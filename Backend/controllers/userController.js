import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import user from '../models/userModel.js'

 export const registerUser = asyncHandler(async (req,res)=>{
    try {
        
        const {fullname, phone, email,password, company,agency} = req.body
        if(!fullname || !phone || !email || !password || !company || agency===undefined){
            return  res.status(400).send('All fields mandatory')
        }

        const isUser = await user.findOne({email})
            if(isUser)  return res.status(400).send("User already exist")
        
        const hashPass = await bcrypt.hash(password,10)  

        const createUser = await user.create({fullname,phone,email,password:hashPass,company,agency})
         console.log(createUser)
        if(createUser){
            const accessToken = jwt.sign({
               createUser : { fullname : createUser.fullname,
                email : createUser.email,
                id : createUser._id,
               }
            },process.env.JWT_TOKEN,
            { expiresIn: "2h" }
        )

            return res.status(200).send({
                id : createUser._id,
                fullname : createUser.fullname,
                email : createUser.email,
                phone : createUser.phone,
                company: createUser.company,
                token : accessToken
            })

        }

        else{ res.status(400);
            throw new Error("User Creation Failed")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong");
    }
})


export const loginUser = asyncHandler(async(req,res)=>{
     
    try {

        const{email, password} = req.body
    if(!email || !password){ return res.status(400).send('All fields mandatory')}
   
    const isUser = await user.findOne({email})
    if(isUser && (await bcrypt.compare(password, isUser.password))){
        const accessToken = jwt.sign({
            isUser : { 
                fullname : isUser.fullname,
                email : isUser.email,
                id : isUser._id,
            }
         },process.env.JWT_TOKEN,
         { expiresIn: "2h" }
     )
     console.log("logged in")
     return res.status(200).json({
        _id: isUser._id,
      email: isUser.email,
      fullname: isUser.fullname,
      token: accessToken
    })
    }

    else {
        res.status(400);
        throw new Error("User creation failed");
      }
        
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
    

})


