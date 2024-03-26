import React from 'react'
import prisma from '@/prisma/client'
import { Table, Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'

const TaskDetails = async ({params}: {
    params: {taskId: string}
}) => {
    const selectedTask = await prisma.task.findUnique({
        where: {
            id: parseInt(params.taskId)
        }
    })
    //const selectedTask = await axios.get(`/api/tasks/${params.taskId}`)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <Button><Link href={`/tasks/${params.taskId}/edit/${params.taskId}`}>Edit</Link></Button>
            <Button><Link href={`/tasks/${params.taskId}/delete/${params.taskId}`}>Delete</Link></Button>
        </div>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Task Name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Task Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Task Due Date</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{selectedTask?.name}</Table.Cell>
                    <Table.Cell>{selectedTask?.description}</Table.Cell>
                    <Table.Cell>{selectedTask?.dueDate}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    </main>
  )
}

export default TaskDetails