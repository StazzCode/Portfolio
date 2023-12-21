import { useState, useEffect} from 'react';
import './styles.css'
export const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile screens

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

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
    <>
        <section className='h-20 bg-lightheader w-full'>
            <div className="grid grid-cols-2 lg:grid-cols-12 ">
                <div className="col-span-12">
                    <nav className={`font-face-rm text-xl ${isMenuOpen || !isMobile ? 'mx-7' : 'mx-7'}`}>
                    <ul className={`flex lg:justify-around items-center space-x-2 lg:space-x-4 h-20 ${isMenuOpen ? 'flex justify-between' : 'flex justify-between'}`}>
                            <li className=''>
                                <a className=' text-xl lg:text-3xl'>Kellian Mirey</a>
                            </li>
                            <ul className={`lg:flex space-x-4 text-xl lg:text-4l ${isMobile ? 'hidden lg:flex' : 'hidden lg:flex'}`}>
                                <li>
                                    <a>/Formations</a>
                                </li>
                                <li>
                                    <a>/Compétences</a>
                                </li>
                                <li>
                                    <a>/Réalisations</a>
                                </li>
                                <li>
                                    <a>/Centres d'intérêt</a>
                                </li>
                            </ul>
                            <li className={`${isMobile ? 'hidden lg:flex' : 'hidden lg:flex'}`}>
                                <a className=' justify-end text-xl lg:text-3xl'>Contact</a>
                            </li>
                            {/* Hamburger menu button */}
                            <li className={`lg:hidden ${isMobile ? 'block' : 'hidden'}`}>
                                <button onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </>
  )
}
