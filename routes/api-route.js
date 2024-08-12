const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller');

router.get('/user/list', apiController.getUser);
// router.post('/user/update', apiController.updateUser);
// router.post('/user/delete', apiController.deleteUser);
// router.post('/user/create', apiController.createUser);
router.post('/user/add', apiController.addUser);


// router.get('/user/list', function (req, res){
//     let userData = [{
//         name: "Devkumar",
//         age: 19,
//         email: "devkumar@gmail.com"
//     },
//     {
//         name: "Ramesh",
//         age: 20,
//         email: "ramesh@gmail.com"
//     }]
//     res.send({
//     data:userData,
//     status: "success"
//     })
// })
module.exports = {
    route:router
}
