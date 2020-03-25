require('../../src/global');

const {Plant} = include('/models');
const plants = require('./plants.json');
exports.seed = async knex => {
    await knex(Plant.tableName).del();
    try{
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(plants.map(plant => Plant.insertOne(plant))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
