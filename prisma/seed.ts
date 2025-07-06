// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Seed an admin user
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@mail.com" },
    update: {},
    create: {
      email: "admin@mail.com",
      password: await bcrypt.hash("test", 10),
      role: "ADMIN",
    },
  });

  // Seed some TV products
  // await prisma.product.createMany({
  //   data: [
  //     {
  //       model: "TV-1000",
  //       size: "55",
  //       resolution: "4K",
  //       hdrSupport: true,
  //     },
  //     {
  //       model: "TV-2000",
  //       size: "65",
  //       resolution: "8K",
  //       hdrSupport: true,
  //     },
  //   ],
  // });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
