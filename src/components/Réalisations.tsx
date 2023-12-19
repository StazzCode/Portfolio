export const Réalisations = () => {
    const goToProjetAgile = () => {
        window.location.href = 'https://github.com/StazzCode/Rendu_SAE_BDD';
      };
  return (
    <>
        <div className=" h-screen pt-32 border border-blue-500">
            <h2>/ Réalisations</h2>
            <div className="border border-red-500 h-1/2">
                <div className="carousel carousel-center space-x-96 h-full">
                    <div className="carousel-item w-1/3 cursor-pointer" onClick={goToProjetAgile}>
                        <img src="src/assets/img/ProjetAgile.jpg" className="relative h-full"></img>
                        <div className="absolute text-lighttext">
                            <h5>Projet Agile</h5>
                            <p className=""> Pizza Del Papa est un logiciel Ludo-pédagogique se jouant sur 
                                terminal, dont le but est de réaliser les pizzas de clients, 
                                dont les commandes sont aléatoires parmi une liste de pizzas 
                                prédéfinies, pour gagner des points et faire le plus de points possible.</p>
                        </div>
                    </div>
                    <div className="carousel-item w-1/3">
                        <img src="src/assets/img/ProjetPortfolio.jpg" className="h-full"></img>
                        <div>
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item w-1/3">
                        <img src="src/assets/img/ProjetBDD.jpg" className="h-full"></img>
                        <div>
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
