import { useEffect, useState } from "react";
import { BgNeonBar } from "./BgNeonBar";
import { ProjectSlide } from "./ProjectsSlide";
import "./styles.css";
import React from "react";

export const Réalisations = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const projects = [
    {
      id: "slide0",
      imageSrc: "assets/img/ProjetAgile.jpg",
      title: "Projet Agile",
      description:
        "Pizza Del Papa est un logiciel ludopédagogique qui se joue sur terminal. Le but est de réaliser les pizzas commandées par les clients. Les commandes sont générées aléatoirement parmi une liste prédéfinie de pizzas, et le joueur gagne des points en les préparant correctement. Nous sommes quatre étudiants à avoir réalisé ce projet en tant qu'équipe pluridisciplinaire. Pour ce projet, nous avons appris à appliquer la méthode agile et à suivre le cadre SCRUM.",
      skills: ["Communication", "Git", "Java", "SCRUM"],
      knowHow: [
        "Développer un logiciel",
        "Appliquer les concepts SCRUM",
        "Programmation en Java",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Projet_Agile"),
    },
    {
      id: "slide1",
      imageSrc: "assets/img/ProjetPortfolio.jpg",
      title: "Projet Portfolio",
      description:
        "Ce portfolio est avant tout un projet réalisé dans le cadre de mon parcours, visant à regrouper mes compétences, mes projets et à me présenter en tant qu'étudiant et développeur. Cependant, ce portfolio représente pour moi un projet à part entière, m'offrant l'opportunité de développer mes compétences en front-end. En effet, il me permet d'explorer de nouvelles technologies, frameworks et bibliothèques, telles que React et Tailwind CSS, tout en démontrant mes capacités dans ce domaine.",
      skills: ["React", "Tailwind CSS", "HTML", "Vite.js"],
      knowHow: [
        "Développer un site web",
        "Réaliser une interface ergonomique",
        "Réaliser un projet avec React",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Portfolio"),
    },
    {
      id: "slide2",
      imageSrc: "assets/img/ProjetBDD.jpg",
      title: "Projet BDD",
      description:
        "Le projet exploite les données olympiques via une base de données PostgreSQL. Les données, contenues dans des fichiers au format CSV, sont d'abord importées dans une table 'import', puis ventilées en tables distinctes pour organiser les différentes catégories d'informations (athlètes, pays, éditions, événements, résultats). L'analyse est réalisée à l'aide de requêtes SQL, en se focalisant particulièrement sur les performances des athlètes américains en athlétisme. Un rapport personnalisé est généré, mettant en avant les médaillés d'or et l'évolution des performances des athlètes.",
      skills: ["SQL", "PowerAMC", "MCD/MLD", "Postgresql"],
      knowHow: [
        "Filtrer et Traiter des données",
        "Réaliser une analyse statistique",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Rendu_SAE_BDD"),
    },
    {
      id: "slide3",
      imageSrc: "assets/img/Capture_CAM.jpg",
      title: "Projet Chasse au Monstre",
      description:
        "La Chasse au Monstre est un jeu où deux personnages s'affrontent : un monstre et un chasseur. Le monstre se trouve dans un labyrinthe et doit trouver la sortie tout en évitant d'être éliminé. Le chasseur, quant à lui, se situe à l'extérieur du labyrinthe et tire à l'intérieur pour tuer le monstre. Le jeu se termine lorsque le monstre atteint la sortie ou lorsque le chasseur parvient à l'éliminer. Le jeu est développé en Java et utilise la bibliothèque JavaFX.",
      skills: ["Communication", "Git", "Refactoring", "JavaFX"],
      knowHow: [
        "Développer un logiciel",
        "Créer une interface",
        "Programmation en Java",
        "Réaliser du clean code",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Chasse_au_Monstre"),
    },
    {
      id: "slide4",
      imageSrc: "assets/img/Capture_Pizzaland.jpg",
      title: "Projet API REST PizzaLand",
      description:
        "Le projet consistait à réaliser une API REST simulant la gestion des ingrédients, des pizzas et des commandes d’une pizzeria. Réalisé en binôme avec un camarade, nous avons développé une API REST en Java et JEE, exécutée au sein d’un serveur Tomcat. L’API comprend notamment un système d’authentification qui restreint l'accès aux utilisateurs autorisés pour effectuer des requêtes de modification (POST, PUT, PATCH et DELETE).",
      skills: ["REST", "Jakarta EE", "Bruno", "Tomcat", "Git", "Postgresql"],
      knowHow: [
        "Développer une API REST",
        "Manipuler des bases de données",
        "Programmation Jakarta EE",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/PizzaLand"),
    },
    {
        id: "slide5",
        imageSrc: "assets/img/SAE_WEB_ChatApp.png",
        title: "Application de messagerie en ligne",
        description:
          "Le projet consistait à réaliser une application de messagerie en ligne programmée en Java et Jakarta EE, basée sur le modèle MVC. Réalisée en binôme avec un camarade, nous avons développé une application en Java et JEE, exécutée au sein d’un serveur Tomcat. L’application comprend notamment un système d’authentification. Les différents objets tels que les messages, fils de discussion et utilisateurs sont stockés dans une base de données Postgresql.",
        skills: ["Tomcat", "Tailwind CSS", "Jakarta EE", "Postgresql", "Modèle MVC"],
        knowHow: [
          "Développer une application web",
          "Manipuler des bases de données",
          "Programmation Jakarta EE",
        ],
        onClick: () => openLinkInNewTab("https://github.com/StazzCode/SAE_WEB_ChatApp"),
      },
  ];

  // Navigation click handler
const handleNavigationClick = (index: number) => {
    // Immediately update the active slide state
    setActiveSlide(index);
    
    if (carouselRef.current) {
      const slides = Array.from(carouselRef.current.children);
      const targetSlide = slides[index] as HTMLElement;
      
      // Disable the scroll event listener temporarily
      const carousel = carouselRef.current;
      carousel.removeEventListener('scroll', handleScroll);
      
      // Scroll to the target slide
      carousel.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
      
      // Re-enable the scroll event listener after animation completes
      setTimeout(() => {
        carousel.addEventListener('scroll', handleScroll);
      }, 500); // Adjust timing based on your scroll animation duration
    }
  };
  
  // Scroll event handler (defined outside to be referenced in multiple places)
  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    const slides = Array.from(carousel.children);
    const scrollPosition = carousel.scrollLeft;
    const containerWidth = carousel.clientWidth;
    const centerPosition = scrollPosition + containerWidth / 2;
    
      // Find the slide that is closest to the center position
      let closestSlideIndex = 0;
      let closestDistance = Infinity;
  
      slides.forEach((slide, index) => {
        const slideCenter = (slide as HTMLElement).offsetLeft + (slide as HTMLElement).clientWidth / 2;
        const distance = Math.abs(centerPosition - slideCenter);
  
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlideIndex = index;
        }
      });
  
      // Update the active slide state
      setActiveSlide(closestSlideIndex);
    };
  
    useEffect(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        carousel.addEventListener('scroll', handleScroll);
        return () => {
          carousel.removeEventListener('scroll', handleScroll);
        };
      }
    }, []);

  return (
    <>
      <div className="flex flex-col justify-start space-y-32 h-screen">
        <h2 className="p-4 font-extrabold text-3xl">/ Réalisations</h2>
        <div className="h-1/2 relative flex flex-col justify-center">
          <BgNeonBar />
          <div
            ref={carouselRef}
            className="carousel carousel-center space-x-80 h-full overflow-y-hidden absolute max-w-full px-96"
          >
            {projects.map((project) => (
              <ProjectSlide key={project.id} {...project} />
            ))}
          </div>
          <div className="absolute w-full -bottom-16">
            <div className="flex justify-center items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigationClick(index)}
                  className={`btn btn-xs btn-circle ${
                    activeSlide === index
                      ? "bg-slate-500 border-slate-500"
                      : "bg-slate-200 border-slate-200"
                  } hover:border-slate-500 hover:bg-slate-500`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};