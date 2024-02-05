import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

// import logo from '../assets/img/logo.svg';
// import navIcon1 from './img.png';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); // listen for scroll events

        return window.removeEventListener("scroll", onScroll); // clean up
    }, []);

    const updateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Linkedin"/></a>
                            <a href="#"><img src={navIcon2} alt="Whatsapp"/></a>
                            <a href="#"><img src={navIcon3} alt="GitHub"/></a>
                        </div>
                        <Button variant="primary" className='vvd' onClick={()=>{console.log('connect')}}><span>Let's Connect</span></Button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;