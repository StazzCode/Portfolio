import { GitLabIcon } from "./iconsComponents/GitLabIcon"
import { GithubIcon } from "./iconsComponents/GithubIcon"
import { LinkdinIcon } from "./iconsComponents/LinkdinIcon"
import { MailIcon } from "./iconsComponents/MailIcon"
import { PhoneIcon } from "./iconsComponents/PhoneIcon"

export const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-lightheader text-darktext">
        <nav>
          <header className="footer-title">Contact</header> 
          <div className="flex justify-center space-x-2 items-center">
            <MailIcon/><a href="mailto:kellian.mirey@outlook.fr">kellian.mirey@outlook.fr</a>
          </div>
          <div className="flex justify-center space-x-2 items-center">
            <PhoneIcon/><text>+ 33 6 15 36 48 26</text>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Pages</header> 
          <a className="link link-hover">Formations</a>
          <a className="link link-hover">Compétences</a>
          <a className="link link-hover">Réalisations</a>
          <a className="link link-hover">Centres d'intérêts</a>
        </nav>  
        <nav>
          <header className="footer-title">Liens</header> 
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/StazzCode" target="_blank"><GithubIcon/></a>
            <a href="https://gitlab.univ-lille.fr/kellian.mirey.etu" target="_blank"><GitLabIcon/></a>
            <a href="https://www.linkedin.com/in/kellian-mirey-628301269/" target="_blank"><LinkdinIcon/></a>
          </div>
        </nav>
      </footer>
    </>
  )
}
