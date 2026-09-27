import crypto from "crypto";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "mahadev-plastic-super-secret-key-2026-secure-jwt";
const ADMIN_USER = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "Mahadev@2026!";

export interface AuthSession {
  username: string;
  role: string;
  exp: number; // timestamp in seconds
}

/**
 * Sign a payload into a secure HMAC-SHA256 token
 */
export function signAuthToken(username: string, expiresInDays = 7): string {
  const exp = Math.floor(Date.now() / 1000) + expiresInDays * 24 * 60 * 60;
  const payload: AuthSession = {
    username,
    role: "admin",
    exp,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

/**
 * Verify a token and extract the session
 */
export function verifyAuthToken(token: string): AuthSession | null {
  try {
    if (!token || !token.includes(".")) return null;
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return null;

    const expectedSignature = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(payloadB64)
      .digest("base64url");

    if (signature !== expectedSignature) {
      return null;
    }

    const payload: AuthSession = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf-8")
    );

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return null; // Expired
    }

    return payload;
  } catch (err) {
    return null;
  }
}

/**
 * Validate submitted credentials
 */
export function validateAdminCredentials(username?: string, password?: string): boolean {
  if (!username || !password) return false;
  return username.trim() === ADMIN_USER && password === ADMIN_PASS;
}

/**
 * Extract and verify token from a Next.js App Router Request
 */
export function verifyAdminRequest(req: NextRequest | Request): AuthSession | null {
  // 1. Check cookies
  if ("cookies" in req && typeof req.cookies.get === "function") {
    const cookieToken = req.cookies.get("admin_token")?.value;
    if (cookieToken) {
      const session = verifyAuthToken(cookieToken);
      if (session) return session;
    }
  }

  // 2. Check Authorization header
  const authHeader = req.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const bearerToken = authHeader.substring(7);
    const session = verifyAuthToken(bearerToken);
    if (session) return session;
  }

  // 3. Check Cookie header fallback
  const rawCookieHeader = req.headers.get("cookie");
  if (rawCookieHeader) {
    const match = rawCookieHeader.match(/admin_token=([^;]+)/);
    if (match && match[1]) {
      const session = verifyAuthToken(match[1]);
      if (session) return session;
    }
  }

  return null;
}
