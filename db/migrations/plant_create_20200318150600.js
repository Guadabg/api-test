exports.up = function(knex) {
    return knex.schema
        .createTable('plant', function (table) {
            table.string('id');
            table.string('name', 255);
            table.string('scientificName', 255);
            table.string('family', 255);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('plant');
};
