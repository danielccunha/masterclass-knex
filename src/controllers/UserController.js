const knex = require('../database');

class UserController {
  async index(request, response) {
    const users = await knex.select('*').from('users');
    return response.json(users);
  }
}

module.exports = new UserController();
