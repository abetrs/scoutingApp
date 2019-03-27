const router = require('express').Router();
const Form = require('./Form-Model');

router.post('/submit-form', (req, res, next) => {
    console.log(req.body);
    const userForm = new Form({
      teamNumber: req.body.teamNumber,
      matchType: req.body.matchType,
      descending: req.body.descending,
      cargoInSandstormCargoNotAccurate: req.body.cargoInSandstormCargoNotAccurate,
      cargoInSandstormCargoAccurate: req.body.cargoInSandstormCargoAccurate,
      cargoInSandstormCargoVeryAccurate: req.body.cargoInSandstormCargoVeryAccurate,
      hatchInSandstormCargoNotAccurate: req.body.hatchInSandstormCargoNotAccurate,
      hatchInSandstormCargoAccurate: req.body.hatchInSandstormCargoAccurate,
      hatchInSandstormCargoVeryAccurate: req.body.hatchInSandstormCargoVeryAccurate,
      cargoInSandstormRocketNotAccurate: req.body.cargoInSandstormRocketNotAccurate,
      cargoInSandstormRocketAccurate: req.body.cargoInSandstormRocketAccurate,
      cargoInSandstormRocketVeryAccurate: req.body.cargoInSandstormRocketVeryAccurate,
      hatchInSandstormRocketNotAccurate: req.body.hatchInSandstormRocketNotAccurate,
      hatchInSandstormRocketAccurate: req.body.hatchInSandstormRocketAccurate,
      hatchInSandstormRocketVeryAccurate: req.body.hatchInSandstormRocketVeryAccurate,
      hatchesInTeleOpCargo: req.body.hatchesInTeleOpCargo,
      cargoInTeleOpCargo: req.body.cargoInTeleOpCargo,
      hatchesInTeleOpRocket: req.body.hatchesInTeleOpRocket,
      cargoInTeleOpRocket: req.body.cargoInTeleOpRocket,
      highestRocketCargo: req.body.highestRocketCargo,
      highestRocketHatch: req.body.highestRocketHatch
    });
    userForm.save()
    .then(savedData => {
        res.send({
            message: 'Success!',
            savedData: savedData
        });
    }).catch(err => {
        res.status(403).send({
            message: 'Failure',
            error: err
        });
    });
});

router.get('/get-form/:id', (req, res, next) => {
    Form.findById({
        _id: req.params.id
    })
    .exec()
    .then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(404).send({
            error: 'Not Found'
        });
    });
});

module.exports = router;