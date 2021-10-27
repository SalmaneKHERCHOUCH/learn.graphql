const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql `

    type User {
        id: Int
        pseudo: String
        mail: String
        age: Int
        numero_portable: String
    }

    type Post {
        id: Int
        title : String
        content : String
        author : String
    }

    type Query {
        getPost: [Post]
    }
`
const post = [
    {
        id: 1,
        content: "Premier message"
    },
    {
        id: 2,
        content: "Deuxieme message"
    }
]

const resolvers = {
    Query: {
      getPost: () => post,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });



