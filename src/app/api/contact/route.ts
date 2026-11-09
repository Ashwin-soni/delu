import getMongoClientPromise from "@/lib/mongodb";

const servicesList = [
  "Web Development",
  "Meta Ads (IG & FB)",
  "Google Ads (Search & PMax)",
  "Social Media Strategy",
  "Full Growth Suite (Web + Ads)",
] as const;

const budgetOptions = [
  "Under $3,000",
  "$3k - $7k",
  "$7k - $15k",
  "$15k+",
] as const;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please submit valid form data." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return Response.json({ error: "Please submit valid form data." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";
  const details = typeof data.details === "string" ? data.details.trim() : "";
  const services = data.services;
  const budget = data.budget;

  if (!name || name.length > 100) {
    return Response.json({ error: "Enter a name of 1 to 100 characters." }, { status: 400 });
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (
    !Array.isArray(services) ||
    services.length === 0 ||
    services.length > servicesList.length ||
    !services.every(
      (service: unknown) =>
        typeof service === "string" &&
        servicesList.some((allowedService) => allowedService === service),
    )
  ) {
    return Response.json({ error: "Select at least one valid service." }, { status: 400 });
  }

  if (
    typeof budget !== "string" ||
    !budgetOptions.some((allowedBudget) => allowedBudget === budget)
  ) {
    return Response.json({ error: "Select a valid budget." }, { status: 400 });
  }

  if (website.length > 2048 || details.length > 5000) {
    return Response.json(
      { error: "The website or project description is too long." },
      { status: 400 },
    );
  }

  try {
    const client = await getMongoClientPromise();
    const database = client.db(process.env.MONGODB_DB || "delulogic");

    await database.collection("contact_inquiries").insertOne({
      name,
      email,
      services,
      budget,
      website,
      details,
      createdAt: new Date(),
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to save contact inquiry:", error);
    return Response.json(
      { error: "We couldn't submit your inquiry right now. Please try again." },
      { status: 500 },
    );
  }
}
