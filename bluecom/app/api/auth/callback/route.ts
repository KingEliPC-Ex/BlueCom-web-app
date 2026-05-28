export async function POST(req: Request) {
  const body = await req.json();

  console.log("User logged in:", body);

  return new Response("OK", { status: 200 });
}
