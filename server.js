const fastify = require('fastify')({ logger: true });

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

fastify.get('/api/users', async (request, reply) => {
  return users;
});

fastify.post('/api/users', async (request, reply) => {
  const newUser = { id: users.length + 1, name: request.body.name };
  users.push(newUser);
  return newUser;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();