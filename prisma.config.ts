// prisma.config.ts
import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

// Load environment variables specifically from .env.local
config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
