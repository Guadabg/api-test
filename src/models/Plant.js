const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Plant';
const tableName = 'plant';

const selectableProps = [
    'name',
    'scientific_name',
    'family',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class PlantModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new PlantModel({knex});
