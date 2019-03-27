const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    teamNumber: String,
    matchType: String,
    descending: String,
    cargoInSandstormCargoNotAccurate:String,
    cargoInSandstormCargoAccurate: String,
    cargoInSandstormCargoVeryAccurate: String,
    hatchInSandstormCargoNotAccurate: String,
    hatchInSandstormCargoAccurate:String,
    hatchInSandstormCargoVeryAccurate:String,
    cargoInSandstormRocketNotAccurate: String,
    cargoInSandstormRocketAccurate: String,
    cargoInSandstormRocketVeryAccurate: String,
    hatchInSandstormRocketNotAccurate: String,
    hatchInSandstormRocketAccurate: String,
    hatchInSandstormRocketVeryAccurate: String,
    hatchesInTeleOpCargo: String,
    cargoInTeleOpCargo: String,
    hatchesInTeleOpRocket: String,
    cargoInTeleOpRocket: String,
    highestRocketCargo: String,
    highestRocketHatch: String
});

module.exports = mongoose.model('Form', formSchema);