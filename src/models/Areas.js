const {poolList} = require('../servicios/dbConection');

listArea = async (res) => {
    console.log('ko')
    const result = await poolList(
        `SELECT IdArea, areas
            FROM Area
            ORDER BY areas`, res
        );
    return result;
};

getArea = [];



module.exports = {listArea};