import { useMediaQuery } from 'react-responsive';
import { Link } from "react-scroll";

const links = [
    {name: 'Home', path: 'home'},
    {name: 'Eventos', path: 'eventos'},
    {name: 'Cursos', path: 'curso'},
    {name: 'Contato', path: '#'},
]

const Navbar = ({containerStyles, linkStyles}) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    });

    return (
        <nav className={`${containerStyles}`}>
            {
                links.map((link, index) => {
                    return (
                        <Link to={link.path} 
                            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
                            key={index}
                            smooth={!isDesktop ? 'true' : 'false'}
                            spy
                            offset={-50}
                            activeClass='active' >
                            {link.name}
                        </Link>
                    );
                })
            }
        </nav>
    )
}
export default Navbar