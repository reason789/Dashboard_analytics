import { headers } from "next/headers";

export async function GET(request) {
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || "Unknown";

  // ISP information is not directly available without external services
  const isp = "Not available without external API";

  return Response.json({ ip, isp });
}
