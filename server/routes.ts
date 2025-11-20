import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertInviteRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Invite request routes
  app.post('/api/invite-requests', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Validate request body
      const validatedData = insertInviteRequestSchema.parse({
        ...req.body,
        userId,
      });

      const inviteRequest = await storage.createInviteRequest(validatedData);
      res.json(inviteRequest);
    } catch (error) {
      console.error("Error creating invite request:", error);
      res.status(400).json({ message: "Failed to create invite request" });
    }
  });

  app.get('/api/invite-requests/check', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const existingRequest = await storage.getInviteRequestByUserId(userId);
      res.json({ hasRequested: !!existingRequest, request: existingRequest });
    } catch (error) {
      console.error("Error checking invite request:", error);
      res.status(500).json({ message: "Failed to check invite request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
