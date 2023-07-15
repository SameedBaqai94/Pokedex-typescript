import { usePokemonContext } from "../context/pokemonContext";
import { PokeCard } from "./Pokecard";

export function PokemonComponent() {
    const { pokemonList } = usePokemonContext();
    return (
        <>
            {pokemonList.map(pokemon => (
                <PokeCard pokemon={pokemon} />
            ))}
        </>
    )
}