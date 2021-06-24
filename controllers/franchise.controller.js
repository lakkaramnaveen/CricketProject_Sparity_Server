const mongoose = require('mongoose');

const Franchise = mongoose.model('franchises');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.getFranchises = (req, res, next) =>{
    Franchise.find({},function(err, franchise){
        if (!err)  {res.send(franchise); }
        else { console.log('Error in Retriving Frachises :' + JSON.stringify(err, undefined, 2));}
    });
}

module.exports.getFranchisesById = (req, res, next) =>{
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);
    Franchise.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Franchise :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.addFranchise = (req, res, next) => {
    var franchise = new Franchise();
    franchise.name = req.body.name;
    franchise.code = req.body.code;
    franchise.owner = req.body.owner;
    franchise.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Franchise Save :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.updateFranchise = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var franch = {
        name: req.body.name,
        code: req.body.code,
        owner: req.body.owner
    };
    Franchise.findByIdAndUpdate(req.params.id, { $set: franch }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Franchise Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.deleteFranchise = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Franchise.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Franchise Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}

//-----------------------------------------------------------------
