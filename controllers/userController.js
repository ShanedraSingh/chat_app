const User = require('../models/userModel');
const bcrypt= require('bcrypt');

const registerLoad = async (req,res)=>{

    try{
        res.render("register");



    }catch (error){
        console.log(error.massage);
    }

};

const register = async (req,res)=>{

    try{

        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User ({
            name: req.body.name,
            email: req.body.email,
            image: 'images/'+req.file.filename,
            password: passwordHash,
            message: req.body.meassge,
        });

        await user.save();

        res.render("register", {
          message: "Your Registration has been Completed!",
        });



    }catch (error){
        console.log(error.message);
    }


};

module.exports = {
    registerLoad,
    register,
}
