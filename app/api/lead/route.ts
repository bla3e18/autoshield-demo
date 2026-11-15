import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  car?: string;
  message?: string;
};

// In-memory store — for demo purposes. Replace with a real DB/CRM in production.
const leads: Array<LeadPayload & { id: number; createdAt: string }> = [];
let nextId = 1;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;
    if (!body?.name || !body?.phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    const record = {
      ...body,
      id: nextId++,
      createdAt: new Date().toISOString(),
    };
    leads.push(record);

    // Demo hook: log to console (in production: send to CRM / Telegram / email).
    console.log("[lead]", record);

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("lead error", err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}