import Token from "../../Model/Token.js";
import Usermodel from "../../Model/Usermodel.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { json } from "express";
dotenv.config();
const signup = async (req, res) => {
  try {
    const hashed_password = await bcrypt.hash(req.body.password, 10);
    const user = {
      username: req.body.username,
      name: req.body.name,
      password: hashed_password,
    };
    const new_user = new Usermodel(user);
    await new_user.save();
    return res.status(200).json({ msg: "Signup Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Error while signup" });
  }
};

const login = async (req, res) => {
  let user = await Usermodel.findOne({ username: req.body.username });
 
  if (!user) {
    return res.status(400).json({ msg: "Username does not match" });
  }
  try {
     await bcrypt.compare(req.body.password, user.password,function(error,result){
       if(result){
        const jsontoken = jsonwebtoken.sign(user.toJSON(),process.env.normalKey)
        res.status(200).json({
          Token : jsontoken,
          name : user.name,
          username:user.name
        })
       }else{
        res.status(400).json({msg:'Password Does not match'})
       }
     });
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error While Loggin In" });
  }
};
export { signup, login };



/*
const login = async (req, res) => {
  let user = await Usermodel.findOne({ username: req.body.username });

  if (!user) {
    return res.status(400).json({ msg: "Username does not match" });
  }
  try {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accesToken = jsonwebtoken.sign(
        user.toJSON(),
        process.env.normalkey,
        { expiresIn: "15m" }
      );
      const refreshToken = jsonwebtoken.sign(
        user.toJSON(),
        process.env.refreshkey
      );
      const new_Token = new Token({ token: refreshToken });
      await new_Token.save();
      res.status(200).json({
        accesToken: accesToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      res.status(400).json({ msg: "Password Does Not match" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error While Loggin In" });
  }
};
export { signup, login };

*/