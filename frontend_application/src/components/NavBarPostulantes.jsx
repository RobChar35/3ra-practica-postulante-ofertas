import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPostulantes(){
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Postulantes</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Creado para: <a href="https://tecsup.instructure.com/courses/29480/assignments/811607">Tercera practica calificada</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarPostulantes;