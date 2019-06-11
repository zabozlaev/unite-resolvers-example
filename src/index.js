const { ApolloServer } = require('apollo-server');

const { loadResolvers, loadSchemas } = require('./util/modules');

const bootstrap = async () => {
  const server = new ApolloServer({
    resolvers: loadResolvers(),
    typeDefs: loadSchemas()
  });

  await server.listen(3000);
};
bootstrap();
