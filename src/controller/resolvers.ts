import { AppDataSource } from '../app';
import { User } from './../entities/User';

// userById:()=>{
//     return AppDataSource.getRepository(User).findOneBy()
// }

const resolvers = {
    Query: {
        async getUser(_: any, _args: { id: any; }) {
            return await AppDataSource.getRepository(User).findOne({ where: { id: _args.id } })

        }
    },
    Mutation: {
        async updateUser(_: any, _args:{userInput: { id: number, name: string, email: string }}): Promise<User> {
            const { id, name, email } = _args.userInput
            await AppDataSource.getRepository(User).update(id, { name, email })
            const updatedUser = await AppDataSource.getRepository(User).findOne({ where: { id } })
            return updatedUser as User
        }
    },

    // async createUser() {

    // }
}
    


export default resolvers;