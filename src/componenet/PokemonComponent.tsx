import { Row } from "react-bootstrap";
import { usePokemonContext } from "../context/pokemonContext";
import { PokeCard } from "./Pokecard";

export const PokemonComponent = () => {
    const { filteredPokemonList } = usePokemonContext();
    return (
        <Row lg={3} style={{ margin: "auto" }}>
            {filteredPokemonList.map(pokemon => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </Row>
    )
}