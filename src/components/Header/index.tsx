import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './index.css'  

const Header: React.FC = () => {
    let imgnome = 'https://media.discordapp.net/attachments/704458768519528532/897997999530197052/of__4_-removebg-preview_5.png?width=512&height=205'
    let imglogo = "https://media.discordapp.net/attachments/704458768519528532/897998031067181056/image_49.png"
    
    return(
        <div>
        <img id="logo" src={imglogo} alt="Logo"/>
        <img id="nome" src={imgnome} alt="Nome Hotel" /> 

            <div id='MENU'>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
            </div>
        </div>
        );

}
 
export default Header;