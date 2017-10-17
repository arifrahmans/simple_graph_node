import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql';

// initilize graphql server
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty : true,
    graphiql : true
})));

// connect to database
mongoose.connect('localhost:27017/blog');

// run server
var server = app.listen(8888, () => {
    console.log('Listening at port', server.address().port);
});