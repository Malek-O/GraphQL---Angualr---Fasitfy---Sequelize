const { User, Todo } = require("../models");

module.exports = resolvers = {
    Query: {
        async todos() {
            const tods = await Todo.findAll()
            return tods
        },
        async todo(_, args) {
            const todo = await Todo.findOne({ where: { id: args.id } })
            return todo
        },
        async users() {
            const users = await User.findAll()
            return users
        },
        async user(_, args) {
            const user = await Todo.findOne({ where: { id: args.id } })
            return user
        }
    },
    User: {
        async todos(parent){
            const todo = await Todo.findAll({ where: { UserId: parent.id } })
            return todo
        }
    },
    Mutation: {
        addUser: async (_, { user }) => {
            const newUser = await User.create({
                password: user.password,
                email: user.email
            });
            return newUser
        },
        addTodoToUser: async (_, { todo }) => {
            if(!todo.todo.description){
                throw new Error("Title cannot be empty");
            }
            const todoToAdd = await Todo.create({
                description: todo.todo.description,
                status: todo.todo.status,
                UserId: todo.id
            });
            return todoToAdd
        },
    }
}