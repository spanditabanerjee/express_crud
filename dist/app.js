"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const default_1 = __importDefault(require("./config/default"));
const data_1 = __importDefault(require("./routes/data"));
const get_1 = __importDefault(require("./routes/get"));
const insert_1 = __importDefault(require("./routes/insert"));
const update_1 = __importDefault(require("./routes/update"));
require("reflect-metadata");
const fs_1 = __importDefault(require("fs"));
const resolvers_1 = __importDefault(require("./controller/resolvers"));
const graphql_tools_1 = require("graphql-tools");
// import graphqlController from './controller/graphqlController';
// const schema  = new GraphQLSchema({
//     query,
//     mutation
// });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', data_1.default);
app.use('/', insert_1.default);
app.use('/', get_1.default);
app.use('/', update_1.default);
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
const typeDefs = fs_1.default.readFileSync('./schemas/schema.graphql', { encoding: 'utf-8' });
const schema = (0, graphql_tools_1.makeExecutableSchema)({ typeDefs, resolvers: resolvers_1.default });
app.use('/graphql', expressGraphql({
    schema,
    graphiql: true
}));
app.listen(1000, () => console.info('Server started'));
exports.AppDataSource = new typeorm_1.DataSource(default_1.default);
exports.AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => { console.log('Server Running'); });
}).catch((err) => console.log("error while connecting database", err));
function expressGraphql(arg0) {
    throw new Error('Function not implemented.');
}
