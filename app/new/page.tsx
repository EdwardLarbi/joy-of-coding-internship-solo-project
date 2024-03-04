'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react'

const CreateTaskPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='task name' />
        </TextField.Root>
        <TextArea placeholder='description...'/>
        <Button>Create New Task</Button>
    </div>
  )
}

export default CreateTaskPage