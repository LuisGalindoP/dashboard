const dataTest = require("../models/dataTest.model");

module.exports = {

    //Find all entries
    getAllData: (req, res) => {
        dataTest.find()
        .then((allData) => {
            console.log(allData);
            res.json(allData);
        })
        .catch((err) => {
            console.log("Error in getAllData controller");
            res.json({Error: err});
        })
    },

    //Add one data item
    addNewData: (req, res) => {
        dataTest.create(req.body)
        .then((newData) => {
            console.log(newData);
            res.json(newData);
        })
        .catch((err) => {
            console.log("Error in addNewData controller");
            res.status(400).json(err);
        })
    },

    //Find one data entry
    getOneData: (req, res) => {
        dataTest.findOne({_id: req.params.id})
        .then((OneData)=>{
            console.log(OneData);
            res.json(OneData);
        })
        .catch((err) => {
            console.log("Error in getOneData controller");
            res.json({Error: err});
        })
    },

    //Update data entry
    updateData: (req, res) => {
        dataTest.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedData)=> {
            console.log(updatedData)
            res.json(updatedData);
        })
        .catch((err)=> {
            res.status(400).json(err);
        })
    },

    //Remove data entry
    removeOneData: (req, res) => {
        dataTest.deleteOne({_id: req.params.id})
        .then((deletedData) => {
            console.log(deletedData);
            res.json(deletedData);
        })
        .catch((err)=>{
            console.log("Error in removeOneData controller");
            res.json({Error: err});
        })
    }
}