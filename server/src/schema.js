const gql = require ("graphql-tag");

const typedefs = gql`

type Query
{
    tracksForHome : [Track!]!
} 
type Track {
    "This is a is"
    id : ID!
    title : String
    author : Author!
    thumbnail : String
    length : Int
    modulesCount : Int
}

type Author{
    id : ID!
    name: String!
    photo : String
}`;

module.export = typedefs;
