//custom graphql error handlers
const {
  DevLoggingTools,
  GraphQLErrorData,
  MutationError,
} = require("../utils");
const auth = new AuthTools();
const mutation = new GraphQLErrorData("mutation");
//devlogging tools
const dev = new DevLoggingTools(false);

const resolvers = {
  // Query: {
  //   //none needed at this time
  // },
  Mutation: {
    //place an order to be sent to owner email via nodemailer
    orderForm: async (parent, {name, email, body}) => {
      dev.multiLog(false, "new user submitted order:", name, email, body);
      mutation.username = name;
      mutation.setReason = "user submitted order form";
      try {
        
      } catch (err) {
        dev.groupError("orderForm", [err]);
      }

    },
  },
};

module.exports = resolvers;
