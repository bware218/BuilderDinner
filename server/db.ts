import { drizzle } from "drizzle-orm/neon-serverless";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// For local development without database
let db: any = null;

if (!process.env.DATABASE_URL) {
  console.log("⚠️  No DATABASE_URL found - running in mock mode for local testing");
  console.log("   Google Sheets integration will still work!");
  db = null;
} else {
  db = drizzle({
    connection: process.env.DATABASE_URL,
    schema,
  });
}

export { db };
