const User = require('../models/userModel');

const getUsers = async(req, res) => {
    let response = await User.find({});
    if(response){
        res.send(response);
    }else{
        res.send("error")
    }
}

 const createUser = async(req,res) => {
    try {
        const { name, email, password } = req.body;
    
        const user = await User.insertMany({ name, email, password });
        
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
 }

 const getUserById = async(req,res) => {
    try {
        const id = req.params.id;
    
        const user = await User.find({_id: id});
        
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
 }

module.exports= {getUsers,createUser,getUserById}