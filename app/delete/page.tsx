'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DeleteForm: React.FC = () => {
    const router = useRouter();
  const [id, setId] = useState<number>();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      setErrorMessage('');

      // Validate if id is a number
      if (!id || isNaN(id)) {
        setErrorMessage('Please enter a valid ID');
        return;
      }

      // Make DELETE request to API route
      await axios.delete(`/api/tasks/${id}`);
      

      // Reset form state after successful deletion
      setId(undefined);

      router.push('/');
    } catch (error) {
      setErrorMessage('Error deleting data');
      console.error('Error deleting data:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className='max-w-xl space-y-3' >
      <h2>Delete Entry</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }}>
       <TextField.Root>
            <TextField.Input placeholder='enter task ID' value={id || ''} onChange={(e) => setId(parseInt(e.target.value))} required/>
        </TextField.Root>
        <Button type="submit" disabled={isDeleting}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default DeleteForm;
