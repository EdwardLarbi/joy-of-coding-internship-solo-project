'use client';
import { Button } from "@radix-ui/themes";
import { useRouter } from 'next/navigation';

interface Props {
    taskId : number
}

const ViewTask = ({taskId} : Props) => {
    const router = useRouter();
  return (
    
    <Button onClick={()=>router.push(`/tasks/${taskId}`)}>View</Button>
  )
}

export default ViewTask