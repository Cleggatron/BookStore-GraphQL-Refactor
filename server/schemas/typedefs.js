const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Book {
        _id: ID
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type User{
        _id: ID
        username: String
        email: String
        bookcount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID
        user: User
    }

    input BookInput {
        _id: ID
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!) : Auth
        addUser(username: String!, email: String!, password: String!) : Auth
        saveBook(book: BookInput) : User
        removeBook(bookId: ID!) : User
    }
`;

module.exports = typeDefs;