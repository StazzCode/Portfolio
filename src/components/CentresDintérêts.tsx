import { JeuxVideoIcon } from "./iconsComponents/JeuxVideoIcon"
import { LeftArrow } from "./iconsComponents/LeftArrow"
import { MusicIcon } from "./iconsComponents/MusicIcon"
import { RightArrow } from "./iconsComponents/RightArrow"

export const CentresDintérêts = () => {
  return (
    <>
      <div className="flex flex-col justify-start space-y-24 h-screen">
        <h2 className="p-4 font-extrabold text-3xl">/ Centres d'intérêt</h2>
        <div className=" flex flex-col lg:flex-row justify-around h-3/5">
          <div className="card bg-lightheader h-full w-1/4 shadow-md overflow-hidden relative">
            <div className="carousel h-full w-full absolute carou text-lighttext">
              <div className="carousel-item w-full relative" id="1">
                <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Alright <h4 className="ml-2 mt-1.5 text-sm">by Kendrick Lamar</h4></h2>
                <img src="assets/img/ToPimpAButterfly.jpeg" className="w-full"/>
                <a href="#2" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="2">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Music Sound Better With You <h4 className="ml-2 mt-1.5 text-sm">by Stardust</h4></h2>
                <img src="assets/img/MusicSoundBetterWithYou.jpeg" className="w-full"/>
                <a href="#1" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
                <a href="#3" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="3">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Deadly Clout <h4 className="ml-2 mt-1.5 text-sm">by The Caracal Project</h4></h2>
                <img src="assets/img/DeadlyClout.jpeg" className="w-full"/>
                <a href="#2" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
              </div>
            </div>
            <div className="card-body mt-8 pt-24 justify-center">
              <h2 className="card-title">
                Musique
                <MusicIcon/>
              </h2>
              <p>
                J'adore écouter de la musique, mes goûts musicaux sont plutôt variés mais mes genres préférés sont : 
                <br />
                <br />
                <ul className="ml-6 list-disc">
                  <li>Rap</li>
                  <li>House</li>
                  <li>Drum & Bass</li>
              </ul>
              </p>
            </div>
          </div>

          <div className="card bg-lightheader h-full w-1/4 shadow-md overflow-hidden relative">
            <div className="carousel h-full w-full absolute carou text-lighttext">
              <div className="carousel-item w-full relative" id="4">
                <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Minecraft <h4 className="ml-2 mt-1.5 text-sm">(2011)</h4></h2>
                <img src="assets/img/Minecraft.jpeg" className="w-full"/>
                <a href="#5" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="5">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Cyberpunk 2077 <h4 className="ml-2 mt-1.5 text-sm">(2020)</h4></h2>
                <img src="assets/img/Cyberpunk.jpeg" className="w-full"/>
                <a href="#4" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
                <a href="#6" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="6">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Lethal Company <h4 className="ml-2 mt-1.5 text-sm">(2023)</h4></h2>
                <img src="assets/img/LethalCompany.jpeg" className="w-full"/>
                <a href="#5" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
              </div>
            </div>
            <div className="card-body mt-8 pt-24 justify-center">
              <h2 className="card-title">
                Jeux Vidéo
                <JeuxVideoIcon/>
              </h2>
              <p>
                Les jeux vidéo sont une de mes passion depuis tout petit, voici trois excellent jeux que je conseille :
                <br />
                <br />
                <ul className="ml-6 list-disc">
                  <li>Minecraft</li>
                  <li>Cyberpunk 2077</li>
                  <li>Lethal Company</li>
              </ul>
              </p>
            </div>
          </div>

          <div className="card bg-lightheader h-full w-1/4 shadow-md overflow-hidden relative">
            <div className="carousel h-full w-full absolute carou text-lighttext">
              <div className="carousel-item w-full relative" id="7">
                <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Breaking Bad <h4 className="ml-2 mt-1.5 text-sm">(2008)</h4></h2>
                <img src="assets/img/BreakingBad.jpeg" className="w-full"/>
                <a href="#8" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="8">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Mr Robot <h4 className="ml-2 mt-1.5 text-sm">(2015)</h4></h2>
                <img src="assets/img/MrRobot.jpeg" className="w-full"/>
                <a href="#7" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
                <a href="#9" className="absolute h-16 w-16 top-1/2 right-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <RightArrow/>
                </a>
              </div>
              <div className="carousel-item w-full relative" id="9">
              <h2 className="absolute bottom-0 flex justify-center m-2 text-xl font-extrabold backdrop-blur-md rounded-2xl">Brooklyn Nine-Nine <h4 className="ml-2 mt-1.5 text-sm">(2013)</h4></h2>
                <img src="assets/img/B99.jpeg" className="w-full"/>
                <a href="#8" className="absolute h-16 w-16 top-1/2 left-5 bg-white/50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <LeftArrow/>
                </a>
              </div>
            </div>
            <div className="card-body mt-8 pt-24 justify-center">
              <h2 className="card-title">
                Séries
                <MusicIcon/>
              </h2>
              <p>
                Depuis l'arrivée des plateforme de streaming, je consomme pas mal de séries sur Netflix, Prime et autre. Donc je vous propose trois séries dont mes deux préférées et une série coup de coeur :
                <br />
                <br />
                <ul className="ml-6 list-disc">
                  <li>Breaking Bad</li>
                  <li>Mr Robot</li>
                  <li>Brooklyn Nine-Nine</li>
              </ul>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
