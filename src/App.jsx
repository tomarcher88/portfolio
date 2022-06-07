import { useState } from 'react'
import Hero from './components/Hero'
import ProjectGallery from './components/ProjectGallery'

function App() {

  const [count, setCount] = useState(0)


  return (
   <main className='font-roboto'>
     <Hero />
     <ProjectGallery />
   </main>
  )
}

export default App
