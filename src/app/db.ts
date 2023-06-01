

/* This code is importing the `PrismaClient` class from the `@prisma/client` package. It then creates a
global variable `globalForPrisma` that has a property `prisma` of type `PrismaClient` or
`undefined`. */
import { PrismaClient } from "@prisma/client";

/* This code is creating a global variable `globalForPrisma` that has a property `prisma` of type
`PrismaClient` or `undefined`. It is using the `global` object in Node.js to create this global
variable and casting it to an unknown type and then to an object with a `prisma` property of type
`PrismaClient` or `undefined`. This allows the `prisma` instance to be accessed globally in the
application. */
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}

/* This code is exporting a `prisma` constant that is either the `prisma` property of the
`globalForPrisma` object or a new instance of the `PrismaClient` class with a `log` option set to
`['query']`. The `??` operator is used to check if the `prisma` property is `undefined` and if it
is, it creates a new instance of `PrismaClient`. This allows the `prisma` instance to be accessed
globally in the application. */
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query']
})

/* This code is checking if the current environment is not in production mode. If it is not in
production mode, it sets the `prisma` property of the `globalForPrisma` object to the `prisma`
instance created earlier. This allows the `prisma` instance to be accessed globally in
non-production environments for debugging purposes. */
if (process.env.NODE_ENV !== 'production') globalForPrisma.
prisma = prisma

