import { GlobeIcon } from "./iconsComponents/GlobeIcon"

export const Formations = () => {
  return (
    <>
        <div className=" h-screen pt-32 border border-blue-500">
            <h2>/ Formations</h2>
            <div className=" flex justify-around border border-red-500">
                <section className="m-16">
                    <h4>/2022</h4>
                    <h1>Baccalauréat Général</h1>
                    <p>Spécialités : Mathématiques - NSI </p>
                    <GlobeIcon/>
                    <a href="https://lycee-gustave-eiffel.fr">Lycée Polyvalent Gustave Eiffel, Armentières</a>
                </section>
                <section className="m-16">
                    <h4>/2023</h4>
                    <h1>BUT - 1 Informatique</h1>
                    <GlobeIcon/>
                    <a href="http://iut.univ-lille.frdut-info">IUT de Lille, Villeneuve d’Asques</a>
                </section>
            </div>
        </div>
    </>
  )
}
