const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlFranchise = require('../controllers/franchise.controller');//
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/franchises',ctrlFranchise.getFranchises);
router.get('/franchises/:id',ctrlFranchise.getFranchisesById);
router.post('/franchises/add',ctrlFranchise.addFranchise);
router.put('/franchises/:id',ctrlFranchise.updateFranchise);
router.delete('/franchises/:id',ctrlFranchise.deleteFranchise);

module.exports = router;



