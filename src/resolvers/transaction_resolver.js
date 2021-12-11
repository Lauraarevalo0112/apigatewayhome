const transactionResolver = {
    Query: {
        transactionByUsername: async (_, { username }, { dataSources }) => {
            return dataSources.accountAPI.transactionByUsername(username)
            
        }
    },
    Mutation: {
        createTransaction: async (_, { transaction }, { dataSources}) => {
             return dataSources.accountAPI.createTransaction(transaction)
           

        }
    }
};
module.exports = transactionResolver;