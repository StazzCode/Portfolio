import './App.css'
import { CentresDintérêts } from './components/CentresDintérêts'
import { Compétences } from './components/Compétences'
import { Footer } from './components/Footer'
import { Formations } from './components/Formations'
import { Navbar } from './components/Navbar'
import { NeonBar } from './components/NeonBar'
import { Réalisations } from './components/Réalisations'
import { TexteAccueil } from './components/TexteAccueil'

function App() {
  return (
    <main className='flex min-w-full min-h-screen flex-col bg-gradient-to-br from-lightgradient1 from-25% to-lightgradient2 to-100% container mx-auto text-darktext'>
      <Navbar/>
      <NeonBar/>
      <br/>
      <br/>
      <TexteAccueil/>
      <br/>
      <Formations/>
      <br/>
      <Compétences/>
      <br/>
      <Réalisations/>
      <br/>
      <CentresDintérêts/>
      <br/>
      <Footer/>
    </main>
  )
}

export default App
