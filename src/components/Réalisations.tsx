import { BgNeonBar } from "./BgNeonBar";
import { UpArrow } from "./iconsComponents/UpArrow";
import "./styles.css"
export const Réalisations = () => {
    const openLinkInNewTab = (url : string) => {
        window.open(url, '_blank');
    };

    const goToBDD = () => {
        openLinkInNewTab('https://github.com/StazzCode/Rendu_SAE_BDD');
    };

    const goToProjetAgile = () => {
        openLinkInNewTab('https://gitlab.univ-lille.fr/2023-projet-agile-de-rentree/groupe-11');
    };

    const goToPortfolio = () => {
        openLinkInNewTab('https://github.com/StazzCode/Portfolio');
    };
  return (
    <>
        <div className="flex flex-col justify-start space-y-32 h-screen">
            <h2 className="p-4 font-extrabold text-3xl">/ Réalisations</h2>
            <div className="h-1/2 relative flex flex-col justify-center">
                <BgNeonBar/>
                <div className="carousel carousel-center space-x-80 h-full overflow-y-hidden absolute max-w-full px-96">
                    <div id="1" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToProjetAgile}>
                        <img src="../..src/assets/img/ProjetAgile.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-auto blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet Agile</h5>
                            <p className="mt-3 mx-2 text-justify">
                                Pizza Del Papa est un logiciel Ludo-pédagogique se jouant sur 
                                terminal, dont le but est de réaliser les pizzas de clients, 
                                dont les commandes sont aléatoires parmi une liste de pizzas 
                                prédéfinies, pour gagner des points et faire le plus de points possible.
                                Nous sommes 4 étudiants à avoir réaliser ce projet en tant qu'équipe pluridisciplinaires,
                                et pour ce projet nous avons appris à appliquer la méthode agile et à suivre le SCRUM guide.
                            </p>
                        </div>
                    </div>
                    <div id="2" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToPortfolio}>
                        <img src="src/assets/img/ProjetPortfolio.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet Portfolio</h5>
                            <p className="mt-3 mx-2 text-justify">
                                Ce portfolio est premièrement un travail à réaliser durant mon parcours 
                                afin de regrouper mes compétences, mes projets et à me présenter en tant qu'étudiant/développeur.
                                Mais ce portfolio est pour moi un projet à part entière qui me permet de m'exercer côté front-end,
                                de travailler avec des nouvelles technologies, des nouveaux frameworks et librairies comme React
                                et Tailwind CSS, il me permet donc aussi de montrer mes compétences en front-end.
                            </p>
                        </div>
                    </div>
                    <div id="3" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToBDD}>
                        <img src="src/assets/img/ProjetBDD.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet BDD</h5>
                            <p className="mt-3 mx-2 text-justify">
                            Le projet exploite les données olympiques via une base de données. 
                            Importation dans PostgreSQL (table "import") des donnée contenues dans fichier au format csv, 
                            ventilation en tables distinctes pour séparer les différentes données
                            (athlètes, pays, éditions, événements, résultats). Analyse via requêtes SQL, 
                            focalisation sur les performances américaines en athlétisme. Rapport personnalisé sur 
                            les médaillés d'or et l'évolution des athlètes. Le projet a démontré l'efficacité des bases de données 
                            pour la clarté des performances olympiques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
