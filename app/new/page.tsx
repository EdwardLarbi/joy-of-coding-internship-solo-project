'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';

import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface TaskForm {
  name: string;
  description: string;
  dueDate: string;
}

const CreateTaskPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<TaskForm>();

  return (
    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        await axios.post('/api/tasks', data);
        router.push('/');
      })}>
        <TextField.Root>
            <TextField.Input placeholder='task name' {...register('name')} required/>
        </TextField.Root>
        <TextArea placeholder='description...' {...register('description')} required />
        <TextField.Root>
            <TextField.Input placeholder='YYYY-MM-DD HH:MM:SS' {...register('dueDate')} required/>
        </TextField.Root>
        {/* <div className='text-zinc-500 items-center text-sm'>
          <span>Due Date: </span>
          <input type='datetime-local' {...register('dueDate')} autoComplete='off'/>
        </div> */}
        <Button>Create New Task</Button>
    </form>
  )
}

export default CreateTaskPage