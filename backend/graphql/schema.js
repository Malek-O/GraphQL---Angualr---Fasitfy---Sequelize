const typeDefs = `#graphql
   enum TodoStatus {
    COMPLETED
    PENDING
   }

  type User {
    id: ID!,
    email: String!,
    password: String!,
    todos: [Todo!]
  },
  
  type Todo {
    id: ID!,
    description: String!,
    status: TodoStatus!
    user: User
  },

  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
    users: [User]
    user(id: ID!): User
  },

  type Mutation {
    addUser(user:AddUserInput!) : User
    addTodoToUser(todo:AddTodoToUser!) : Todo
  }


  input AddUserInput {
    email:String!,
    password:String!
  }
  input AddTodoToUser {
    id:String!,
    todo: todoToAdd!
  }

  input todoToAdd {
    description: String!,
    status: TodoStatus!
  }
  
`;
module.exports = typeDefs