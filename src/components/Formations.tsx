import { GlobeIcon } from "./iconsComponents/GlobeIcon"

export const Formations = () => {
  return (
    <>
        <div className="flex flex-col justify-start space-y-48 h-screen border border-blue-500">
            <h2 className="p-4 font-extrabold text-3xl">/ Formations</h2>
            <div className=" flex flex-col lg:flex-row justify-around h-2/5 border border-red-500">
                <div className="grid flex-grow mx-12 w-1/3 h-full card rounded-box bg-slate-100 overflow-hidden">
                    <div className="bg-lightheader font-bold text-4xl flex flex-col justify-center h-2/3 shadow">
                        <h4 className="m-4">/2022</h4>
                    </div>
                    <h1>Baccalauréat Général</h1>
                    <p>Spécialités : Mathématiques - NSI </p>
                    <GlobeIcon/>
                    <a href="https://lycee-gustave-eiffel.fr">Lycée Polyvalent Gustave Eiffel, Armentières</a>
                </div> 
                <div className="grid flex-grow mx-12 w-1/3 h-full card rounded-box bg-slate-100">
                    <h4>/2023</h4>
                    <h1>BUT - 1 Informatique</h1>
                    <GlobeIcon/>
                    <a href="http://iut.univ-lille.frdut-info">IUT de Lille, Villeneuve d’Asques</a>
                </div>
            </div>
        </div>
    </>
  )
}
