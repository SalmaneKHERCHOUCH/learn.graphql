const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql `

    type User {
        id: Int
        pseudo: String
        mail: String
        age: Int
        numero_portable: String
        posts : [Post]
    }

    type Post {
        id: Int
        title : String
        content : String
        author : User
    }

    type Query {
        getPost: [Post]
        getUser: [User]
    }
`
const post = [
    {
        id: 1,
        content: "Premier message",
        author: "Salmane",
        title: "First"
    },
    {
        id: 2,
        content: "Deuxieme message",
        author: "Salmane",
        title: "Second"
    }
]

const user = [
    {
        id: 1,
        pseudo: "Darkstone",
        mail: "dark@hotmail.com",
        age: 25,
        numero_portable: "0602030504",
        posts: post

    },
    {
        id: 2,
        pseudo: "Zornos",
        mail: "zornos@gmail.com",
        age: 23,
        numero_portable: "0789561234",
        posts: post 
    }
]

const resolvers = {
    Query: {
      getPost: () => post,
      getUser: () => user,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });



