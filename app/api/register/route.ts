import { PrismaClient } from "@prisma/client";
import { visitorSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = visitorSchema.parse(body);

    const existingVisitor = await prisma.visitor.findFirst({
      where: { email: validatedData.email },
    });

    if (!existingVisitor) {
      const visitor = await prisma.visitor.create({
        data: validatedData,
      });
      return NextResponse.json(visitor);
    }

    return NextResponse.json(existingVisitor);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
