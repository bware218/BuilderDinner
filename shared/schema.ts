import { sql } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// Invite Requests table
export const inviteRequests = pgTable("invite_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").notNull(),
  fullName: varchar("full_name").notNull(),
  city: varchar("city").notNull(),
  role: varchar("role").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => [
  index("idx_invite_requests_email").on(table.email)
]);

export const insertInviteRequestSchema = createInsertSchema(inviteRequests, {
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full name is required"),
  city: z.string().min(1, "City is required"),
  role: z.enum(["Host", "Attendee"], { errorMap: () => ({ message: "Role must be either Host or Attendee" }) }),
}).omit({
  id: true,
  createdAt: true,
});

export type InsertInviteRequest = typeof inviteRequests.$inferInsert;
export type InviteRequest = typeof inviteRequests.$inferSelect;
