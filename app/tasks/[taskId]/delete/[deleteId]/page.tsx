'use client';

import { Button, Heading } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DeletePage =  ({params}:{
  params: {deleteId: string}
}) => {
  const router = useRouter();
  const handleDelete = async () => {
    try{
        await axios.delete(`/api/tasks/${params.deleteId}`);
        router.push('/tasks');
    } catch {
        console.error('Error deleting data:');
    }
}

  return (
    <div className='max-w-xl space-y-3 content-center' >
      <Heading>are you sure!!!! </Heading>
      <Button onClick={handleDelete}>yep..</Button>
      <Button onClick={()=> router.push('/tasks')}>nope..</Button>
    </div>
  );
};

export default DeletePage;
