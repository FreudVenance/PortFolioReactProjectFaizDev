import { Container } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
        <a href="/"
          className="flex items-center font-bold text-3xl md:text-1xl"
        >
            <Container className="mr-4"/>
            LUC<span className="text-accent">DEV</span>
        </a>

        <ul
          className="hidden md:flex space-x-4"
        >
          <li>
            <a href="#Home" className="btn btn-sm btn-ghost">Accueil</a>
            <a href="#About" className="btn btn-sm btn-ghost">A propos</a>
            <a href="#Experiences" className="btn btn-sm btn-ghost">Mes expériences</a>
            <a href="#Projects" className="btn btn-sm btn-ghost">Mes Projets</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar