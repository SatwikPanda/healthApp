import { PrismaClient } from "@prisma/client"; // Correct named import

// Declare a global variable for PrismaClient to avoid multiple instances
declare global {
    var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient instance or use the existing one
export const db = globalThis.prisma || new PrismaClient();

// If not in production, set the global prisma to the new instance
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
