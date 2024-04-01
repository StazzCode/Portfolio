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
    <main className='body flex min-w-full min-h-screen flex-col container mx-auto'>
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
