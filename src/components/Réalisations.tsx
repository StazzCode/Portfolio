import { useState } from "react";
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
      id: "slide1",
      imageSrc: "assets/img/ProjetAgile.jpg",
      title: "Projet Agile",
      description:
        "Pizza Del Papa est un logiciel ludopédagogique qui se joue sur terminal...",
      skills: ["Communication", "Git", "Java", "SCRUM"],
      knowHow: [
        "Développer un logiciel",
        "Appliquer les concepts SCRUM",
        "Programmation en Java",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Projet_Agile"),
    },
    {
      id: "slide2",
      imageSrc: "assets/img/ProjetPortfolio.jpg",
      title: "Projet Portfolio",
      description:
        "Ce portfolio est avant tout un projet réalisé dans le cadre de mon parcours...",
      skills: ["React", "Tailwind CSS", "HTML", "Vite.js"],
      knowHow: [
        "Développer un site web",
        "Réaliser une interface ergonomique",
        "Réaliser un projet avec React",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Portfolio"),
    },
    {
      id: "slide3",
      imageSrc: "assets/img/ProjetBDD.jpg",
      title: "Projet BDD",
      description:
        "Le projet exploite les données olympiques via une base de données PostgreSQL...",
      skills: ["SQL", "PowerAMC", "MCD/MLD", "Postgresql"],
      knowHow: [
        "Filtrer et Traiter des données",
        "Réaliser une analyse statistique",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/Rendu_SAE_BDD"),
    },
    {
      id: "slide4",
      imageSrc: "assets/img/Capture_CAM.jpg",
      title: "Projet Chasse au Monstre",
      description:
        "La Chasse au Monstre est un jeu où deux personnages s'affrontent...",
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
      id: "slide5",
      imageSrc: "assets/img/Capture_Pizzaland.jpg",
      title: "Projet API REST PizzaLand",
      description:
        "Le projet consistait à réaliser une API REST simulant la gestion des ingrédients...",
      skills: ["REST", "JEE", "Bruno", "Tomcat", "Git", "Postgresql"],
      knowHow: [
        "Développer une API REST",
        "Manipuler des bases de données",
        "Programmation JEE",
      ],
      onClick: () => openLinkInNewTab("https://github.com/StazzCode/PizzaLand"),
    },
  ];

  const handleNavigationClick = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

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