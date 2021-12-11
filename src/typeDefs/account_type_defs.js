const { gql } = require('apollo-server');
const accountTypeDefs = gql`
type Account {
username: String!
direccion: String!
telefono: String!
}
input AccountInput {
    username: String!
    direccion: String!
    telefono: String!
    }
extend type Query {
    accountByUsername(username: String!): Account
}
extend type Mutation {
   createAccount(account: AccountInput ): Account
}
`;
module.exports = accountTypeDefs;