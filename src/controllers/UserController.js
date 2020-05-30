const knex = require('../database');

class UserController {
  async index(request, response) {
    const users = await knex('users').select('*');
    return response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await knex('users').where('id', id).select('*').first();

    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    return response.json(user);
  }

  async create(request, response) {
    const { username } = request.body;

    await knex('users').insert({ username });
    return response.status(201).send();
  }

  async update(request, response) {
    const { id } = request.params;
    const { username } = request.body;

    await knex('users').update({ username }).where('id', id);
    return response.send();
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('users').where('id', id).del();
    return response.send();
  }
}

module.exports = new UserController();
