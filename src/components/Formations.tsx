import { BookIcon } from "./iconsComponents/BookIcon"
import { GlobeIcon } from "./iconsComponents/GlobeIcon"
import { StudyIcon } from "./iconsComponents/StudyIcon"

export const Formations = () => {
  return (
    <>
        <div className="flex flex-col justify-start space-y-48 h-screen">
            <h2 className="p-4 font-extrabold text-3xl">/ Formations</h2>
            <div className=" flex flex-col lg:flex-row justify-around h-2/5">
                <div className="flex flex-col justify-start flex-grow mx-12 w-1/3 h-full card rounded-box bg-slate-100 overflow-hidden text-xl font-bold shadow-md">
                    <div className="bg-lightheader font-extrabold text-4xl flex flex-col justify-center h-16 shadow">
                        <h4 className="m-4 ml-8">2022</h4>
                        <span className="absolute mb-1 ml-4">/</span>
                    </div>
                    <ul className="flex flex-col justify-around h-full m-3 list-none">
                        <li className="flex flex-row items-center space-x-2"><StudyIcon/><h1>Baccalauréat Général</h1></li>
                        <li className="flex flex-row items-center space-x-2"><BookIcon/><p>Spécialités : Mathématiques - NSI </p></li>
                        <li className="flex flex-row items-center space-x-2"><GlobeIcon/><a href="https://lycee-gustave-eiffel.fr">Lycée Polyvalent Gustave Eiffel, Armentières</a><img src="src/assets/img/Logo-Lycee.jpg" alt="lyceelogo" className="w-1/6"/></li>
                    </ul>
                </div>  
                <div className="flex flex-col justify-start flex-grow mx-12 w-1/3 h-full card rounded-box bg-slate-100 overflow-hidden text-xl font-bold shadow-md">
                    <div className="bg-lightheader font-extrabold text-4xl flex flex-col justify-center h-16 shadow">
                        <h4 className="m-4 ml-8">2023</h4>
                        <span className="absolute mb-1 ml-4">/</span>
                    </div>
                    <ul className="flex flex-col justify-around h-full m-3 list-none">
                        <li className="flex flex-row items-center space-x-2"><StudyIcon/><h1>BUT - 1 Informatique</h1></li>
                        <li className="flex flex-row items-center space-x-2"><h1></h1></li>
                        <li className="flex flex-row items-center space-x-2"><GlobeIcon/><a href="http://iut.univ-lille.frdut-info">IUT de Lille, Villeneuve d’Asques</a><img src="src/assets/img/UnivLilleLogo.png" alt="unvilillelogo" className="w-1/3"/></li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}
