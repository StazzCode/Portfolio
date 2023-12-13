import './App.css'
import { Navbar } from './components/Navbar'
import { NeonBar } from './components/NeonBar'
import { TexteAccueil } from './components/TexteAccueil'

function App() {
  return (
    <main className='flex min-w-full min-h-screen flex-col bg-gradient-to-br from-lightgradient1 from-25% to-lightgradient2 to-100% container mx-auto'>
      <Navbar/>
      <NeonBar/>
      <br></br>
      <br />
      <TexteAccueil/>
    </main>
  )
}

export default App
