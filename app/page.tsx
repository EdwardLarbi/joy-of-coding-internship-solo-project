import { Button, Table } from '@radix-ui/themes';
import prisma from "@/prisma/client"
import Link from 'next/link';

export default async function Home() {
  const myTasks = await prisma.task.findMany();
  console.log(myTasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button><Link href='/new'>Create Task</Link></Button>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            myTasks.map(
              (myTask)=>
              <Table.Row>
                <Table.RowHeaderCell>{myTask.name}</Table.RowHeaderCell>
                <Table.Cell>{myTask.description}</Table.Cell>
                <Table.Cell>{myTask.dueDate}</Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table.Root>
    </main>
  );
}
