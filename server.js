const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(5000, () => 'Server listening on port 5000');