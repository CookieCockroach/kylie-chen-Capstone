/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const clothes = require('../seed_data/clothes')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clothes').del()
  await knex('clothes').insert
  (clothes);
};
