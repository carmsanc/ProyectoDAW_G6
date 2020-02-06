const router = require('express').Router()

const userController = require('../controllers/user.controller')
const jwtHelper = require('../config/jwtHelper') 
const configMensaje = require('../configMensaje');


router.post('/register', userController.register)
router.post('/authenticate', userController.authenticate)
router.get('/user-profile', jwtHelper.verifyJwtToken, userController.userProfile)
router.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
  })
router.get('/favoritos', (req, res) =>{
    res.json([{
        _id: 1,
        name: 'startup1',
        categoria: 'lorem ipsum',
        
    },{
        _id: 2,
        name: 'startup2',
        categoria: 'lorem ipsum',
        
    },
    {
        _id: 3,
        name: 'startup3',
        categoria: 'lorem ipsum',
        
    },
        
    ])
});
module.exports = router