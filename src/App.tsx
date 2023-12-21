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
    <main className='flex min-w-full min-h-screen flex-col bg-gradient-to-r from-lightgradient1 from-5% to-lightgradient2 to-100% container mx-auto text-darktext'>
      <div id='nav'>
        <Navbar/>
      </div>
      <NeonBar/>
      <br/>
      <br/>
      <TexteAccueil/>
      <br/>
      <div id='f'>
        <Formations/>
      </div>
      <br/>
      <div id='c'>
        <Compétences/>
      </div>
      <br/>
      <div id='r'>
        <Réalisations/>
      </div>
      <br/>
      <div id="ci">
        <CentresDintérêts/>
      </div>
      <br/>
      <div id='footer'>
        <Footer/>
      </div>
    </main>
  )
}

export default App
