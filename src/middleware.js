import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const USERNAME = process.env.BASIC_AUTH_USER || "admin";
const PASSWORD = process.env.BASIC_AUTH_PASS || "password";

// Middleware per proteggere le pagine admin e login
export function middleware(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return new Response("Autenticazione richiesta", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString();
  const [user, pass] = credentials.split(":");

  if (user !== USERNAME || pass !== PASSWORD) {
    return new Response("Accesso negato", {
      status: 403,
    });
  }

  return NextResponse.next();
}

// ✅ Protegge admin e tutte le pagine accessibili da admin, compresa login
export const config = {
  matcher: [
    "/admin", 
    "/addhighlighted_news",
    "/managehighlighted_news",
    "/addnews",
    "/managenews",
    "/addsmallnews",
    "/managesmallnews",
    "/addevent",
    "/manageevents",
    "/addpress",
    "/managepress",
    "/addagenda_event",
    "/manageagenda_events",
    "/login" // Proteggiamo anche la pagina di login
  ],
};
