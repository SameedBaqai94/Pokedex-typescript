import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { PokemonList } from "../context/pokemonContext";
import styled from "styled-components";

type PokeCardProps = {
    pokemon: PokemonList
}

const TypeDiv = styled.div`
    display:flex;
`
const StatDiv = styled.div`

`
export function PokeCard({ pokemon }: PokeCardProps) {

    return (
        <Col className="d-flex">
            <Card style={{ width: "40rem ", padding: "10px" }}>
                <Card.Body className="d-flex">
                    <div className="flex-grow-1">
                        <Card.Img variant="top" src={pokemon.gif} style={{ width: "7rem", height: "5rem" }} />
                        <Card.Title>{pokemon.name}</Card.Title>
                    </div>
                    <div className="flex-grow-1">
                        {
                            pokemon.types.map(type => (
                                <TypeDiv key={type.id}>
                                    <Card.Text>Type: <span>{type.name}</span></Card.Text>
                                </TypeDiv>
                            ))}
                    </div>
                    <div className="flex-grow-1" style={{ borderLeft: "1px solid black" }}>
                        {pokemon.stats.map(stat => (
                            <div key={stat.statName} style={{ marginLeft: "5px" }}>
                                <Card.Text>{stat.statName}: <span>{stat.baseStat}</span></Card.Text>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Col >

    )
}