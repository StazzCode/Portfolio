import { useState, useEffect} from 'react';
import './styles.css'

export const TexteAccueil = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile screens

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className={`col-span-10 place-self-center ${isMobile ? '' : 'm-20'}`}>
            <section className='font-face-rm m-28'>
                <h1 className='text-darktext font-bold text-3xl lg:text-5xl mb-5'>Bonjour, Je m’appelle Kellian Mirey</h1>
                <p className='text-darktext text-lg lg:text-2xl'>
                Je suis actuellement étudiant en BUT Informatique 
                dans le but de devenir développeur Fullstack. 
                Je me suis passionné pour l’informatique depuis très jeune 
                par les jeux vidéo et le fait de comprendre la plupart des 
                logiciels qui m’accompagnent quotidiennement. 
                Mon objectif en tant que développeur est de développer 
                des logiciels efficaces et satisfaisants pour ses utilisateurs (dont moi).
                </p>
            </section>
        </div>
    </div>
  )
}
