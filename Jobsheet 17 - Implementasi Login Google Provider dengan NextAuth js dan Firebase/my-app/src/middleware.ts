import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import withAuth
import withAuth from "../src/middleware/withAuth"; 

export function Middleware(req: NextRequest) {
  // Melanjutkan request jika lolos pengecekan auth
  return NextResponse.next();
}

// Memanggil fungsi withAuth untuk memproteksi route tertentu
export default withAuth(Middleware, ["/profile", "/admin"]);