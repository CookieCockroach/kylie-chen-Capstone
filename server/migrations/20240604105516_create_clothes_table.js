/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("clothes", (table) => {
            table.increments("cloth_id").primary();
            table.string("icon").notNullable();
            table.enum("color", ["Red", "Blue", "Green", "Yellow", "Grey", "White"]).notNullable();
            table.enum("category", ["Shirt", "Pants", "Skirt", "Shorts", "T-shirt", "Longsleeve"]).notNullable();
            table.enum("type", ["Top", "Bottom"]).notNullable();
            table.boolean("dirty").notNullable();
            table
                .timestamp("updated_at")
                .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("clothes")
};
