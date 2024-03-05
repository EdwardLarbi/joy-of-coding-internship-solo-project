import { NextRequest, NextResponse } from "next/server"; 
import prisma from "@/prisma/client"
import { createtaskSchema } from "@/app/validationSchema"; 

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createtaskSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status:400 })

    const newTask = await prisma.task.create({
        data: {name: body.title, description: body.description, dueDate: body.dueDate}
    });

    return NextResponse.json(newTask, { status: 201 })
}