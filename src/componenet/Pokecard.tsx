import { Card } from "react-bootstrap";
import { PokemonList } from "../context/pokemonContext";

type PokeCardProps = {
    pokemon: PokemonList
}
export function PokeCard(props: PokeCardProps) {
    return (
        <Card>
            <Card.Img variant="top" src={props.pokemon.gif} />
        </Card>
    )
}