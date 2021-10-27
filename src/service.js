const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql `

    type User {
        id: Int
        pseudo: String
        mail: String
        age: Number
        numero_portable: String
    }

    type Post {
        id: Int

    }


    type Mutation {

    }
`
const post = [
    {
        title : "Premier",
        id : 1,
    },
    {
        title : "Deuxieme",
        id : 2,
    },
];

const resolvers = {
    Query: {
      getPost: () => post,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });


;
