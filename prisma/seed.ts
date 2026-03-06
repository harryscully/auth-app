import bcrypt from "bcryptjs";

import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const salt = await bcrypt.genSalt(10);

    const harry = await prisma.user.upsert({
        where: { email: "harry@mail.co.uk" },
        update: {},
        create: {
            email: "harry@mail.co.uk",
            password: await bcrypt.hash("password123", salt),
            name: "Harry",
            role: "ADMIN",
        }
    });
    const tom = await prisma.user.upsert({
        where: { email: "tom@mail.co.uk" },
        update: {},
        create: {
            email: "tom@mail.co.uk",
            password: await bcrypt.hash("password456", salt),
            name: "Tom",
            role: "MANAGER",
        }
    });
    const dick = await prisma.user.upsert({
        where: { email: "dick@mail.co.uk" },
        update: {},
        create: {
            email: "dick@mail.co.uk",
            password: await bcrypt.hash("password789", salt),
            name: "Dick",
            role: "VIEWER",
        }
    }); 
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });