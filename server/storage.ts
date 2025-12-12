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
import { googleSheetsService } from "./googleSheets";

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
    if (db) {
      try {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
      } catch (error) {
        console.error('Database error in getUser:', error);
      }
    }
    return undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    if (db) {
      try {
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
      } catch (error) {
        console.error('Database error in upsertUser:', error);
      }
    }
    
    // Mock user for local testing
    return {
      id: userData.id,
      email: userData.email || '',
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      profileImageUrl: userData.profileImageUrl || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  // Invite Request operations
  async createInviteRequest(request: InsertInviteRequest): Promise<InviteRequest> {
    // Mock database response for local testing
    const mockInviteRequest: InviteRequest = {
      id: Math.random().toString(36).substr(2, 9),
      fullName: request.fullName,
      email: request.email,
      city: request.city,
      role: request.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // If we have a real database, use it
    if (db) {
      try {
        const [inviteRequest] = await db
          .insert(inviteRequests)
          .values(request)
          .returning();
        
        // Also add to Google Sheets
        await googleSheetsService.addSignup({
          fullName: request.fullName,
          email: request.email,
          city: request.city,
          role: request.role,
        });
        
        return inviteRequest;
      } catch (error) {
        console.error('Database error, falling back to Google Sheets only:', error);
      }
    }

    // Fallback: Google Sheets only (for local testing)
    try {
      await googleSheetsService.addSignup({
        fullName: request.fullName,
        email: request.email,
        city: request.city,
        role: request.role,
      });
      console.log('✅ Signup saved to Google Sheets (local testing mode)');
    } catch (error) {
      console.error('Failed to add signup to Google Sheets:', error);
      throw new Error('Failed to save signup');
    }
    
    return mockInviteRequest;
  }

  async getInviteRequestByEmail(email: string): Promise<InviteRequest | undefined> {
    // If we have a real database, use it
    if (db) {
      try {
        const [request] = await db
          .select()
          .from(inviteRequests)
          .where(eq(inviteRequests.email, email))
          .orderBy(inviteRequests.createdAt)
          .limit(1);
        return request;
      } catch (error) {
        console.error('Database error in getInviteRequestByEmail:', error);
      }
    }
    
    // For local testing, always return undefined (no duplicates)
    return undefined;
  }
}

export const storage = new DatabaseStorage();
