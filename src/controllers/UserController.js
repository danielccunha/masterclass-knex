const knex = require('../database');

class UserController {
  async index(request, response) {
    const users = await knex('users').select('*');
    return response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await knex('users').where('id', id).select('*').first();

    // Verify if user exists
    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    return response.json(user);
  }

  async create(request, response) {
    let { username } = request.body;
    username = username.toLowerCase().trim();

    // Verify if username is already taken
    const user = await knex('users').where('username', username).first();
    if (user) {
      return response.status(400).json({ error: 'Username is already taken.' });
    }

    // Otherwise create the user
    await knex('users').insert({ username });

    return response.status(201).send();
  }

  async update(request, response) {
    const { id } = request.params;
    let { username } = request.body;
    username = username.toLowerCase().trim();

    // Verify if user exists
    const user = await knex('users').where('id', id).first();
    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    // Verify if username is already taken by another user
    const existingUser = await knex('users')
      .where('username', username)
      .first();
    if (existingUser && existingUser.id !== id) {
      return response.status(400).json({ error: 'Username is already taken.' });
    }

    // Otherwise update the user
    await knex('users').update({ username }).where('id', id);

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;
    const count = await knex('users').where('id', id).delete();

    // Verify if user were deleted
    if (!count) {
      return response.status(404).json({ error: 'User not found.' });
    }

    return response.send();
  }
}

module.exports = new UserController();
