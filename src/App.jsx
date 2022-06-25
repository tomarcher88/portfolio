import { useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import ProjectGallery from './components/ProjectGallery'

function App() {

  const [count, setCount] = useState(0)


  return (
   <main className='font-noto-sans text-stone-300'>
     <Hero />
     <ProjectGallery />
     <About />
   </main>
  )
}

export default App
