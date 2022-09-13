import express from 'express';
import { DataSource } from 'typeorm';
import ormConfig from './config/default';
import data from './routes/data';
import get from './routes/get';
import insert from './routes/insert';
import update from './routes/update';
import "reflect-metadata";
import fs from 'fs';
import resolvers from './controller/resolvers'
import { makeExecutableSchema } from 'apollo-server-express';
// import {graphiqlExpress , graphqlExpress} from 'apollo-server-express';
import { graphqlHTTP } from 'express-graphql';
// import {query} from './schemas/queries';
// import {mutation} from './schemas/mutations';
import { GraphQLSchema } from 'graphql/type';
import { ApolloServer } from 'apollo-server-express/dist/ApolloServer';
import path from 'path';
import { mergeTypes , fileLoader} from 'merge-graphql-schemas';

// import graphqlController from './controller/graphqlController';


// const schema  = new GraphQLSchema({
//     query,
//     mutation
// });
const app = express();
app.use(express.json());
// app.use('/', data);
// app.use('/', insert);
// app.use('/', get);
// app.use('/', update);
// app.use('/graphql',graphqlController);
// app.use('/',
// expressGraphQl({
//     schema: schema,
//     graphiql: true

// })
// );

// const server = makeExecutableSchema({typeDefs, resolvers});
// server.listen().then(({})=>{
//     console.log('server listening at ${url}')
// })
// app.listen(2000);

const schemaArray = fileLoader(path.join(__dirname, "./schemas/"));
const typeDefs = mergeTypes(schemaArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(1000, () => console.info('Server started'));



export const AppDataSource = new DataSource(ormConfig);
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => { console.log('Server Running'); })
}).catch((err) => console.log("error while connecting database", err));

// function expressGraphql(arg0: { schema: any; graphiql: boolean; }): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//     throw new Error('Function not implemented.');
// }

