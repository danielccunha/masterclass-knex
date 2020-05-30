# masterclass-knex

> Project developed in Rocketseat's Knex masterclass

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

In case you want to use another database than **Postgres**, you'll have to change `knexfile.js` development connection according to your [database setup](http://knexjs.org/#Installation-client).

**Cloning the Repository**

```
git clone https://github.com/danielccunha/masterclass-knex.git
cd masterclass-knex
```

### Installing

```sh
# In case you are using yarn
yarn

# In case you are using npm
npm install
```

### Setup

Before running migrations and seeds, clone `.env.example` and add your Postgres database credentials.

```sh
# Cloning .env file
cp .env.example .env
nano .env

# Running migrations
yarn knex migrate:latest

# Running seeds
yarn knex seed:run
```

### Running it

Finally, after setting up the project start it using `yarn start` or `npm start`. To test it, use the [Insomnia collection](docs/insomnia.json).

## Built With

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Knex.js](http://knexjs.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Express](https://expressjs.com/pt-br/)
