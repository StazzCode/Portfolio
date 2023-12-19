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
        <div className=" h-screen pt-32 border border-blue-500">
            <h2>/ Compétences</h2>
            <div className="border border-red-500">
                <ul className="flex">
                    <ul>
                        <li>
                            <JavaIcon/>
                        </li>
                        <li>
                            <CIcon/>
                        </li>
                        <li>
                        <img className="w-12 h-12" src="src/assets/img/503px-Jakarta_ee_logo_stacked.png"/>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ReactIcon/>
                        </li>
                        <li>
                            <HtmlIcon/>
                        </li>
                        <li>
                            <CssIcon/>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <TailwindIcon/>
                        </li>
                        <li>
                            <BashIcon/>
                        </li>
                        <li>
                            <img className="w-12 h-12" src="src/assets/img/icons8-database-48.png"/>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </>
  )
}
