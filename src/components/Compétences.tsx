import { BashIcon } from "./iconsComponents/BashIcon"
import { CIcon } from "./iconsComponents/CIcon"
import { CssIcon } from "./iconsComponents/CssIcon"
import { HtmlIcon } from "./iconsComponents/HtmlIcon"
import { JavaIcon } from "./iconsComponents/JavaIcon"
import { ReactIcon } from "./iconsComponents/ReactIcon"
import { TailwindIcon } from "./iconsComponents/TailwindIcon"

export const Compétences = () => {
  return (
    <>
        <div className="flex flex-col justify-start space-y-8 h-screen">
            <h2 className="p-4 font-extrabold text-3xl">/ Compétences</h2>
            <div className="">
                <ul className="flex flex-row justify-center space-x-16">
                    <ul className="flex flex-col justify-center space-y-16">
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <JavaIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">JAVA</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Langage de programmation polyvalent et orienté objet.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <CIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">C</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Langage de programmation impératif et de bas niveau, largement utilisé pour le développement système et d'applications performantes.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <img className="w-24 h-24" src="assets/img/503px-Jakarta_ee_logo_stacked.png"/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">Jakarta JEE</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Plateforme pour le développement d'applications d'entreprise en Java. Elle fournit des spécifications et des API.</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-center space-y-16">
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <ReactIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">React</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center"> Bibliothèque JavaScript développée par Facebook pour la construction d'interfaces utilisateur interactives. Elle facilite la création de composants réutilisables.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <HtmlIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">HTML 5</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Langage de balisage utilisé pour structurer le contenu des pages web. Il définit la structure de base des documents web en utilisant des balises.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <CssIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">CSS</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Langage de style utilisé pour définir la présentation et la mise en page des éléments HTML.</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-center space-y-16">
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <TailwindIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">Tailwind CSS</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Framework CSS utilitaire qui facilite la création de styles en utilisant des classes prédéfinies.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <BashIcon/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">Bash</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Interpréteur de commandes utilisé principalement dans les systèmes d'exploitation de type Unix.</p>
                            </div>
                        </li>
                        <li className="box flex flex-col justify-center h-48 w-48 rounded-2xl shadow-md relative overflow-hidden">
                            <div className="flex justify-center">
                                <img className="w-24 h-24" src="assets/img/icons8-database-96.png"/>
                            </div>
                            <p className="flex justify-center m-2 bottom-6 font-bold">SQL</p>
                            <div className="description absolute text-darktext rounded-2xl flex flex-col justify-center">
                                <p className="m-2 text-sm text-center">Langage de programmation spécialisé dans la gestion et la manipulation de bases de données relationnelles.</p>
                            </div>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </>
  )
}
