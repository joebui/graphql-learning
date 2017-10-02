const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schemas/schema')

const app = express()
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(5000, '0.0.0.0', () => {
    console.log('listen on port 5000')
})