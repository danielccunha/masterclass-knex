const knex = require('../database');

class UserController {
  async index(request, response) {
    const users = await knex.select('*').from('users');
    return response.json(users);
  }

  async create(request, response) {
    const { username } = request.body;
    return response.json({ username });
  }
}

module.exports = new UserController();
