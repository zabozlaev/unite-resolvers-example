const fs = require('fs');
const path = require('path');

const unite = require('unite-resolvers');

module.exports.loadResolvers = (ext = 'js') =>
  unite(
    fs.readdirSync(path.join(__dirname, '../modules')).map(module => {
      const modulePath = path.join(
        __dirname,
        `../modules/${module}/${module}.resolver.${ext}`
      );

      if (fs.existsSync(modulePath)) {
        return require(modulePath);
      }
    })
  );
module.exports.loadSchemas = (ext = 'gql') =>
  Buffer.concat(
    fs.readdirSync(path.join(__dirname, '../modules')).map(module => {
      const schemaPath = path.join(
        __dirname,
        `../modules/${module}/schema.${ext}`
      );

      if (fs.existsSync(schemaPath)) {
        return fs.readFileSync(schemaPath);
      }
    })
  ).toString();
