import { NextResponse } from "next/server";
import prisma from "@/prisma/client"

export const PUT = async (req: Request) => {
    console.log("PUT Resquest")
    // update a task by id
    
    try {
        const body = await req.json();
        const id = req.url.split("tasks/")[1];
        console.log("do the prisma edit now!");
        const updatedtask = await prisma.task.update({
            where: { id: parseInt(id) },
            data: {
                description : body.description,
                name: body.name,
            }
        });
        console.log(updatedtask);

        return NextResponse.json({message: "ok"}, {status: 200});
    }   catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
};

export const DELETE = async (req: Request, res: Response) => {
    try {
        const id = req.url.split("tasks/")[1];
        console.log("do the prisma deletion now!");
        const deletedTask = await prisma.task.delete({
            where: {
                id: parseInt(id)
            }
        })
        console.log(deletedTask);

        return NextResponse.json({message: "ok"}, {status: 200});
    }   catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export const GET = async (req: Request) => {
    try{
        const id = req.url.split("tasks/")[1];
        const selectedTask = await prisma.task.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        console.log(selectedTask);
        return NextResponse.json({message: "ok"}, {status: 200});
        
    } catch (err){
        return NextResponse.json(
            {message: "Error", err},
            { status: 500},
        );
    }
};