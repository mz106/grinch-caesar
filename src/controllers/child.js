const Child = require("../models/child");

const addChild = async(req, res) => {
    console.log("recieved body", req.body)
    try {
        const child = new Child({name: req.body.name, isNaughty: req.body.isNaughty});
        console.log(child);
        await child.save();

        res.status(200).json({message: `${child.name} has been added to the DB and is ${child.isNaughty ? "naughty" : "nice"}.`});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addChild
};