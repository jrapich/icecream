const { v4: uuidv4 } = require("uuid");
//custom graphql error handlers
const {
  DevLoggingTools,
  GraphQLErrorData,
  MutationError,
} = require("../utils");
const mutation = new GraphQLErrorData("mutation");
//devlogging tools
const dev = new DevLoggingTools(false);

const resolvers = {
  // Query: {
  //   //none needed at this time
  // },
  Mutation: {
    //place an order to be sent to owner email via nodemailer
    orderForm: async (parent, { name, email, body }) => {
      dev.multiLog(false, "new user submitted order:", name, email, body);
      mutation.username = name;
      mutation.setReason = "user submitted order form";

      //user's unique order number
      const orderID = uuidv4();

      try {
        //logic here to pass the order data to nodemailer
      } catch (err) {
        dev.groupError("orderForm", [err]);
        mutation.message = "there was an error with placing the order";
        mutation.status = 500;
        throw new MutationError("orderForm", mutation);
      }

      //return an object that includes the users name/email, order, and unique ID
      return {
        name: name,
        email: email,
        order: body,
        orderID: orderID,
      };
    },
  },
};

module.exports = resolvers;
