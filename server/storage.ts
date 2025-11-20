import {
  users,
  inviteRequests,
  type User,
  type UpsertUser,
  type InviteRequest,
  type InsertInviteRequest,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Invite Request operations
  createInviteRequest(request: InsertInviteRequest): Promise<InviteRequest>;
  getInviteRequestByEmail(email: string): Promise<InviteRequest | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Invite Request operations
  async createInviteRequest(request: InsertInviteRequest): Promise<InviteRequest> {
    const [inviteRequest] = await db
      .insert(inviteRequests)
      .values(request)
      .returning();
    return inviteRequest;
  }

  async getInviteRequestByEmail(email: string): Promise<InviteRequest | undefined> {
    const [request] = await db
      .select()
      .from(inviteRequests)
      .where(eq(inviteRequests.email, email))
      .orderBy(inviteRequests.createdAt)
      .limit(1);
    return request;
  }
}

export const storage = new DatabaseStorage();
