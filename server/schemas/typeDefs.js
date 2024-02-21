const typeDefs = `
    type Order {
        name: String
        email: String
        order: String
    }
    
    input OrderBody {
        content: String
    }
    
    type Query {
        query(string: String): Order
    }

    type Mutation {
        orderForm(name: String, email: String!, body: OrderBody): Order
    }
`;

module.exports = typeDefs;
