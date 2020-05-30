const knex = require('../database');

class ProjectController {
  async index(request, response) {
    const { userId, page } = request.query;

    // Create base queries
    const query = knex('projects')
      .limit(5)
      .offset(page * 5);

    const countQuery = knex('projects').count();

    // In case userId is passed add where clauses
    if (userId) {
      query
        .where({ user_id: userId })
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')
        .where('users.deleted_at', null);

      countQuery.where({ user_id: userId });
    }

    // Finally, fetch projects and total count
    const projects = await query;
    const [{ count }] = await countQuery;

    response.header('X-Total-Count', count);
    return response.json(projects);
  }

  async create(request, response) {
    let { userId, title } = request.body;
    title = title.trim();

    // Verify if user exists
    const user = await knex('users').where('id', userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    // Otherwise create the project
    await knex('projects').insert({ user_id: userId, title });

    return response.status(201).send();
  }
}

module.exports = new ProjectController();
