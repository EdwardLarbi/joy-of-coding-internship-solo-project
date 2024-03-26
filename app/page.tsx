import Link from 'next/link'
import { Container, Strong, Button } from '@radix-ui/themes';
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { FcSerialTasks } from "react-icons/fc";
import { FcParallelTasks } from "react-icons/fc";
import { MdOutlineTask } from "react-icons/md";
import { IconButton } from '@radix-ui/themes';


const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Container><Button><Link href='/tasks'>see your tasks</Link></Button></Container>
      
      <Container><IconButton><FaTasks /></IconButton> <Strong>Create Tasks</Strong></Container>
      <Container><IconButton><MdAddTask /></IconButton> <Strong>Change your mind?? Edit them...</Strong></Container>
      <Container><IconButton><FcSerialTasks /></IconButton> <Strong>Delete tasks you no longer need</Strong></Container>
      <Container><IconButton><FcParallelTasks /></IconButton> <Strong>View tasks only due today  </Strong></Container>
      <Container><IconButton><MdOutlineTask /></IconButton> <Strong>So much more...</Strong></Container>
      
    </main>

  )
}

export default HomePage