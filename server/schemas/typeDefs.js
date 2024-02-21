const typeDefs = `
    type Order {
        name: String
        email: String
        order: String
    }
    
    input OrderBody {
        content: String
    }

    type Mutation {
        orderForm(name: String, email: String!, body: OrderBody): Order
    }
`;

module.exports = typeDefs;
