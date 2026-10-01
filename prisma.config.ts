import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import { config } from "dotenv";

// Explicitly load .env.local for Next.js
config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
