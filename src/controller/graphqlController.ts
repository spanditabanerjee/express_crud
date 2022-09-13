// import { makeExecutableSchema } from 'apollo-server-express';
// import graphqlHTTP from 'express-graphql';
// import { buildSchema } from 'graphql';
// import { AppDataSource } from "../app";
// import { User } from "../entities/User";

// const schema = buildSchema(`
//     type Query{
//         user(id: Int!): User
//         users: [User],
//     }
//     type Mutation {
//         createUser(name: String!, email: String!): User,

//     }
//     input UserInput{
//         name: String!,
//         email: String!
//     }

//     type User{
//         id: Int!,
//         name: String!,
//         department: String!
//     }
    
// `);

// const rootResolver = {
//     user: (graphqlInput: { id: any; }) => AppDataSource.getRepository(User).findOneBy(graphqlInput && graphqlInput.id),
//     users: AppDataSource.getRepository(User).find(),
//     createUser: (graphqlInput: any) => AppDataSource.getRepository(User).save(graphqlInput),
// };

// const graphql = makeExecutableSchema({
//     schema,
//     rootValue: rootResolver,
//     graphiql: true,
// });

// export default graphql;
