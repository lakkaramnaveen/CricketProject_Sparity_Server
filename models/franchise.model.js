const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

var franchiseSchema = new mongoose.Schema({
    name : reqString,
    code : reqString,
    owner : reqString
});

mongoose.model('franchises', franchiseSchema);