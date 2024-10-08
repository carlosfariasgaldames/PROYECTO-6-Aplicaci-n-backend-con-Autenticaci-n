import User from "../models/User"
import jwt from 'jsonwebtoken'
import { config } from "../config";
import { token } from "morgan";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  


     const newUser = new User({
       username,
       email,
       password,
     });


    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map(role => role._id)

    } else {
      const role = await Role.findOne ({name: "user"})
      newUser.roles =[role._id];
    }

 const savedUser = await newUser.save();
 console.log(savedUser)
 const token = jwt.sign({id: savedUser.id_}, config.SECRET,{
  expiresIn: 86400 // 86400 seg: 1 dia
  })
 
  res.status(200).json('{token}');
};

export const signin = async (req, res) => {

  const userFound = await User .findOne ({email: req.body.email}).populate("roles");
  if (!userFound) return res.status(400).json({message: "User not found"})

    const macthPassword = await User.comparePassword (req.body.password, userFound.password)
    if (!macthPassword) return res.status(401).json({token: null, message: 'Invalid password'})

     const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400
      })

  
    res.json({token})
  
};
