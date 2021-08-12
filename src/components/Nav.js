import { Navbar, Container } from "react-bootstrap"

const Nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://react-bootstrap.netlify.app/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      TODO LIST
      </Navbar.Brand>
    </Container>
  </Navbar>  
        </div>
    )
}

export default Nav
