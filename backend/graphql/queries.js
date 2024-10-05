const queries = `
query getTodos {
todos{
  id,
  description,
  status
}
}


query specficTodo($id: ID!) {
  	todo(id: $id){
    id,
    description,
    status
  }
}

query getUsers {
  users{
    id,
    email,
    todos{
      status,
      description,
      id
    }
  }
}


query specficUser($id: ID!) {
  	user(id: $id){
    id,
   email,
    todos{
      description,
      id,
      status
    }
  }

}

mutation AddUser($user: AddUserInput!) {
   addUser(user:$user){
    email,
    id
  }
 }


`