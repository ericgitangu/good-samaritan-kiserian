// app/api/graphql/[graphql].ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { prisma } from '../../../lib/prisma';

const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    description: String!
    # ... other event properties
  }

  type Publication {
    id: ID!
    title: String!
    description: String!
    # ... other publication properties
  }

  type User {
    id: ID!
    name: String!
    email: String!
    # ... other user properties
  }

  type Query {
    events: [Event!]!
    publications: [Publication!]!
    user(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    events: async () => {
      const events = await prisma.event.findMany();
      return events;
    },
    publications: async () => {
      const publications = await prisma.publication.findMany();
      return publications;
    },
    user: async (_parent: any, args: { id: string }) => {
      const user = await prisma.user.findUnique({
        where: { id: args.id },
      });
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req: any, res: any) => ({ req, res }),
});