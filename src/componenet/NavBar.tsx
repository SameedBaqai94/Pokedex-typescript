import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { usePokemonContext } from "../context/pokemonContext"

export const NavBarComponent = () => {
    const { filterList } = usePokemonContext();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/Pokedex-typescript">Pokedex</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Pokedex-typescript">Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => filterList(e.target.value)}
                        />
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}