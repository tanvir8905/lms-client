import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="link-style" to="/">
              LMS
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#courses">
              <Link className="link-style" to="/courses">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="#courses">
              <Link className="link-style" to="/teachers">
                Teachers
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link className="link-style" to="/pricing">
                Pricing
              </Link>
            </Nav.Link>
            <Nav.Link href="#blogs">
              <Link className="link-style" to="/blogs">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link className="link-style" to="/contact">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link className="link-style" to="/login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
