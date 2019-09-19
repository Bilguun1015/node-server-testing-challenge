const db = require('../database/db-config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(food) {
  return db('food')
          .insert(food, 'id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('food').where({id}).del()
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
