import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link'

const NavigationBar = () => (

    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Link href="/" passHref>
                <Navbar.Brand>
                    Simple Portfolio
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link href="/blog" passHref>
                        <Nav.Link>
                            Blog
                        </Nav.Link>
                    </Link>
                    <Link href="/github" passHref>
                        <Nav.Link>
                            Github
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

)

export default NavigationBar