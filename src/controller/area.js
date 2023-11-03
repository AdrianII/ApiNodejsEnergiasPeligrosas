const { listArea } = require("../models/Areas");


const listAreas = (req, res) => {
    try{
        listArea(res);
        //res.json(result)
    }
    catch(e){
        res.status(500).json({error: e.message})
    }
}

const postArea = (req, res) => {
    res.json({data: 1})
}

const getArea = (req, res) => {
    res.json({data: 1})
}

const putArea = (req, res) => {
    res.json({data: 1})
}

module.exports = {listAreas, postArea, getArea, putArea};