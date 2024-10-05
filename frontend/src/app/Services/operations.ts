import { gql } from "apollo-angular";

const GET_TODOS = gql`
    query getTodos {
        todos{
            id,
            description,
            status
     }
}
`
export { GET_TODOS }