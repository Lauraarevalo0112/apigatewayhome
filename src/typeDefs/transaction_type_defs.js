const { gql } = require('apollo-server');
const transactionTypeDefs = gql`
type Transaction {
    id: String!
    usernameOrigin: String!
    producto: String!
    cantidad: Int!
    date: String!
    valor: String!
}
input TransactionInput {
    id: String!
    usernameOrigin: String!
    producto: String!
    cantidad: Int!
    valor: String!
}
extend type Query {
transactionByUsername(usernameOrigin: String!): [Transaction]
}
extend type Mutation {
createTransaction(transaction: TransactionInput!): Transaction
}
`;
module.exports = transactionTypeDefs;