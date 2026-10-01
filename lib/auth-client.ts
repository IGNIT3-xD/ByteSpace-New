// lib/auth-client.ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL || typeof window !== "undefined"
      ? window.location.origin
      : undefined,
});

// Export helper methods directly
export const { useSession, signOut, signIn } = authClient;
