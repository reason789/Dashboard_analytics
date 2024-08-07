// middleware.js
import { NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(req) {
  const xff = req.headers.get("x-forwarded-for");
  const ip = xff ? xff.split(",")[0] : req.ip;
  const isp = req.headers.get("x-isp") || "Unknown ISP";

  const response = NextResponse.next();
  response.cookies.set("user_isp", isp, {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
