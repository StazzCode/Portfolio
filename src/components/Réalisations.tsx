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
        openLinkInNewTab('https://github.com/StazzCode/Projet_Agile');
    };

    const goToPortfolio = () => {
        openLinkInNewTab('https://github.com/StazzCode/Portfolio');
    };

    const goToCAM = () => {
        openLinkInNewTab('https://github.com/StazzCode/Chasse_au_Monstre');
    };

    const goToPizzaLand = () => {
        openLinkInNewTab('https://github.com/StazzCode/PizzaLand');
    }

  return (
    <>
        <div className="flex flex-col justify-start space-y-32 h-screen">
            <h2 className="p-4 font-extrabold text-3xl">/ Réalisations</h2>
            <div className="h-1/2 relative flex flex-col justify-center">
                <BgNeonBar/>
                <div className="carousel carousel-center space-x-80 h-full overflow-y-hidden absolute max-w-full px-96">
                    <div id="slide1" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-y-hidden shadow-md" onClick={goToProjetAgile}>
                        <img src="assets/img/ProjetAgile.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-auto blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet Agile</h5>
                            <p className="mt-3 mx-2 text-justify">
                            Pizza Del Papa est un logiciel ludopédagogique se jouant sur terminal, dont le but est de réaliser les pizzas des clients. Les commandes sont aléatoires parmi une liste prédéfinie de pizzas, et le joueur gagne des points en les préparant. Nous sommes quatre étudiants à avoir réalisé ce projet en tant qu'équipe pluridisciplinaire. Pour ce projet, nous avons appris à appliquer la méthode agile et à suivre le guide SCRUM.
                            </p>                                
                            <div className="font-semibold  m-4 ">
                                <p>Compétences acquises : </p>
                                <div className='badge badge-info m-1'>Communication</div>
                                <div className='badge badge-info m-1'>Git</div>
                                <div className='badge badge-info m-1'>Java</div>
                                <div className='badge badge-info m-1'>SCRUM</div>
                            </div>
                            <div className="font-semibold  m-4 ">
                                <p>Savoir-faire : </p>
                                <div className='badge badge-accent m-1'>Développer un logiciel</div>
                                <div className='badge badge-accent m-1'>Appliquer les concepts SCRUM</div>
                                <div className='badge badge-accent m-1'>Programmation en Java</div>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToPortfolio}>
                        <img src="assets/img/ProjetPortfolio.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet Portfolio</h5>
                            <p className="mt-3 mx-2 text-justify">
                            Ce portfolio est avant tout un projet réalisé dans le cadre de mon parcours, visant à regrouper mes compétences, mes projets et à me présenter en tant qu'étudiant/développeur. Cependant, ce portfolio représente pour moi un projet à part entière, m'offrant l'opportunité de développer mes compétences en front-end. En effet, il me permet d'explorer de nouvelles technologies, frameworks et bibliothèques telles que React et Tailwind CSS, tout en démontrant mes capacités dans ce domaine.
                            </p>
                            <div className="font-semibold  m-4 ">
                                <p>Compétences acquises : </p>
                                <div className='badge badge-info m-1'>React</div>
                                <div className='badge badge-info m-1'>TailWind CSS</div>
                                <div className='badge badge-info m-1'>HTML</div>
                                <div className='badge badge-info m-1'>Vite.js</div>
                            </div>
                            <div className="font-semibold  m-4 ">
                                <p>Savoir-faire : </p>
                                <div className='badge badge-accent m-1'>Développer un site web</div>
                                <div className='badge badge-accent m-1'>Réaliser une interface ergonomique</div>
                                <div className='badge badge-accent m-1'>Réaliser un projet avec React</div>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToBDD}>
                        <img src="assets/img/ProjetBDD.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet BDD</h5>
                            <p className="mt-3 mx-2 text-justify">
                            Le projet exploite les données olympiques via une base de données PostgreSQL. Les données contenues dans des fichiers au format CSV sont importées dans une table "import", puis ventilées en tables distinctes pour séparer les différentes données (athlètes, pays, éditions, événements, résultats). L'analyse est réalisée à l'aide de requêtes SQL, avec une focalisation sur les performances des athlètes américains en athlétisme. Un rapport personnalisé est généré concernant les médaillés d'or et l'évolution des performances des athlètes. Ce projet a démontré l'efficacité des bases de données pour mettre en évidence les performances olympiques de manière claire et structurée.
                            </p>
                            <div className="font-semibold  m-4 ">
                                <p>Compétences acquises : </p>
                                <div className='badge badge-info m-1'>SQL</div>
                                <div className='badge badge-info m-1'>PowerAMC</div>
                                <div className='badge badge-info m-1'>MCD/MLD</div>
                                <div className='badge badge-info m-1'>Postgresql</div>
                            </div>
                            <div className="font-semibold  m-4 ">
                                <p>Savoir-faire : </p>
                                <div className='badge badge-accent m-1'>Filtrer et Traiter des données</div>
                                <div className='badge badge-accent m-1'>Réaliser une analyse statistique</div>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToCAM}>
                        <img src="assets/img/Capture_CAM.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet Chasse au Monstre</h5>
                            <p className="mt-3 mx-2 text-justify">
                            La Chasse au Monstre est un jeu où deux personnages s'affrontent : un monstre et un chasseur. Le monstre se trouve dans un labyrinthe et doit trouver la sortie tout en restant en vie. Le chasseur, quant à lui, se situe à l'extérieur du labyrinthe et tire à l'intérieur pour éliminer le monstre. Le jeu se termine lorsque le monstre atteint la sortie ou lorsque le chasseur parvient à le tuer. Le jeu est développé en Java et utilise la bibliothèque JavaFX.
                            </p>
                            <div className="font-semibold  m-4 ">
                                <p>Compétences acquises : </p>
                                <div className='badge badge-info m-1'>Communication</div>
                                <div className='badge badge-info m-1'>Git</div>
                                <div className='badge badge-info m-1'>Refactoring</div>
                                <div className='badge badge-info m-1'>JavaFX</div>
                            </div>
                            <div className="font-semibold  m-4 ">
                                <p>Savoir-faire : </p>
                                <div className='badge badge-accent m-1'>Développer un logiciel</div>
                                <div className='badge badge-accent m-1'>Créer une interface</div>
                                <div className='badge badge-accent m-1'>Programmation en Java</div>
                                <div className='badge badge-accent m-1'>Réaliser du clean code</div>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md" onClick={goToPizzaLand}>
                        <img src="assets/img/Capture_Pizzaland.jpg" className="h-full w-full rounded-xl"></img>
                        <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
                            <UpArrow/>
                            <h5 className="text-3xl font-bold mt-7 m-2">Projet API REST PizzaLand</h5>
                            <p className="mt-3 mx-2 text-justify">
                            Le projet consistait à réaliser une API REST simulant la gestion des ingrédients, des pizzas et des commandes d’une pizzeria. Réalisé en binôme avec un camarade, nous avons développé une API REST en Java et JEE, qui est exécutée au sein d’un serveur Tomcat. L’API comprend notamment un système d’authentification qui restreint l'accès aux utilisateurs autorisés pour effectuer des requêtes de mise à jour (POST, PUT, PATCH et DELETE).
                            </p>
                            <div className="font-semibold  m-4 ">
                                <p>Compétences acquises : </p>
                                <div className='badge badge-info m-1'>REST</div>
                                <div className='badge badge-info m-1'>JEE</div>
                                <div className='badge badge-info m-1'>Bruno</div>
                                <div className='badge badge-info m-1'>Tomcat</div>
                                <div className='badge badge-info m-1'>Git</div>
                                <div className='badge badge-info m-1'>Postgresql</div>
                            </div>
                            <div className="font-semibold  m-4 ">
                                <p>Savoir-faire : </p>
                                <div className='badge badge-accent m-1'>Développer une API REST</div>
                                <div className='badge badge-accent m-1'>Manipuler des bases de données</div>
                                <div className='badge badge-accent m-1'>Programmation JEE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full -bottom-16">
                    <div className="flex justify-center items-center gap-2">
                        <a href="#slide1" className="btn btn-xs btn-circle border-slate-200 bg-slate-200 hover:border-slate-500 hover:bg-slate-500"></a> 
                        <a href="#slide2" className="btn btn-xs btn-circle border-slate-200 bg-slate-200 hover:border-slate-500 hover:bg-slate-500"></a> 
                        <a href="#slide3" className="btn btn-xs btn-circle border-slate-200 bg-slate-200 hover:border-slate-500 hover:bg-slate-500"></a> 
                        <a href="#slide4" className="btn btn-xs btn-circle border-slate-200 bg-slate-200 hover:border-slate-500 hover:bg-slate-500"></a>
                        <a href="#slide5" className="btn btn-xs btn-circle border-slate-200 bg-slate-200 hover:border-slate-500 hover:bg-slate-500"></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
