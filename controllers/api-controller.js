const userModel = require('../models/user-model');

class apiController{
    // Create a new User Schema
    // createUser = async function(req, res){
    //     try{
    //         const newUser = new User(req.body);
    //         const {email} = userModel;

    //         const userExist = await userModel.findOne({email});
    //         if(userExist) 
    //             return res.status(409).send({ 
    //             message: "User already exist" 
    //         });
    //         const savedUser = await userModel.save();
    //         res.status(200).send({
    //             data: savedUser,
    //             status: "User created successfully"
    //         });
    //     }catch{
    //         res.status(500).send({
    //             message: "Error creating user",
    //             error: err
    //         });
    //     }
    // };
    // Get all users data from database
    getUser = async function(req, res){
        try{
            let userData = await userModel.find(
                {
                    // age:{
                    //     $gte: 20
                    // }
                }
            );
            res.send({ // status code 400,401,403,405,500
                data : userData ,
                status: "Data Fetched Success"
            })
        }catch(err){
            res.status(500).send({
                data : err,
                status: "Data Fetched Error"
            })
        }
    };
    // Add user to database
    addUser = async function(req, res) {
        let user = new userModel();
        req.body.password = user.generateHash(req.body.password);
        let userData = new userModel(req.body);
        let saveData = await userData.save();

        res.status(200).send({ // status code 400,401,403,405,500
            data : saveData ,
            status: "Data Saved Successfully"
        })
    };

    // Update the data of the existing user 
    // updateUser = (req, res) =>{
    //     res.send({
    //         data: {
    //             id : 1,
    //             name : "User",
    //         },
    //         status: "Data updated successfully"
    //     })
    // }
}
module.exports = new apiController();