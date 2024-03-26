import { Button, Table } from '@radix-ui/themes';
import prisma from "@/prisma/client"
import Link from 'next/link';
import ViewTask from '../components/ViewTask';


export default async function Home() {
    
    
  const myTasks = await prisma.task.findMany();

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button><Link href='tasks/new'>create task</Link></Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Task ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            myTasks.map(
              (myTask)=>
              <Table.Row key={myTask.id}>
                <Table.RowHeaderCell>{myTask.name}</Table.RowHeaderCell>
                <Table.Cell>{myTask.id}</Table.Cell>
                <Table.Cell>{myTask.description}</Table.Cell>
                <Table.Cell>{myTask.dueDate}</Table.Cell>
                <Table.Cell><ViewTask taskId={myTask.id}/></Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table.Root>
    </main>
  );
}
