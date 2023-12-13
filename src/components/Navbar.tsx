import './styles.css'
export const Navbar = () => {
  return (
    <section className='h-20 bg-lightheader w-full'>
        <div className="grid grid-cols-2 lg:grid-cols-12 ">
            <div className="col-span-12">
                <nav className='font-face-rm text-xl'>
                    <ul className='flex justify-around items-center space-x-2 h-20'>
                        <li className=''>
                            <a className=' text-xl lg:text-3xl'>Kellian Mirey</a>
                        </li>
                        <ul className='flex space-x-4 text-xl lg:text-4l'>
                            <li className=''>
                                <a>/Formations</a>
                            </li>
                            <li className=''>
                                <a>/Compétences</a>
                            </li>
                            <li className=''>
                                <a>/Réalisations</a>
                            </li>
                            <li className=''>
                                <a>/Centres d'intérêt</a>
                            </li>
                        </ul>
                        <li className=''>
                            <a className=' justify-end text-xl lg:text-3xl'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
