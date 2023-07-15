import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type PokemonContextProviderProp = {
    children: ReactNode
}
export type PokemonList = {
    id: number
    name: string
    gif: string
    type: PokemonType[]
    stats: PokemonStats[]
}
type PokemonStats = {
    baseStat: string
    statName: string
}

type PokemonType = {
    id: number
    name: string
}

type PokemonContextProps = {
    pokemonList: PokemonList[]
}
const PokemonContext = createContext({} as PokemonContextProps);

export const usePokemonContext = () => {
    return useContext(PokemonContext);
}

export const PokemonContextProvider = ({ children }: PokemonContextProviderProp) => {

    const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);

    useEffect(() => {
        let fetched = true;
        const fetchData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            const data = await response.json();
            return data.results;
        }

        const fetchPokemonDetails = async (data: any) => {
            const response = await fetch(data.url)
            const pokemonData = await response.json();
            return pokemonData;
        }

        const pokemonData = async () => {
            const data = await fetchData();
            const pokemonDatas: PokemonList[] = data.map(async (item: any) => {
                const urlData = await fetchPokemonDetails(item);
                return {
                    id: urlData.order, name: urlData.name, gif: urlData.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    types: urlData.types.map((type: any) => {
                        return { id: type.slot, name: type.type.name }
                    }),
                    stats: urlData.stats.map((stat: any) => {
                        return { baseStat: stat.base_stat, statName: stat.stat.name }
                    })
                }
            })

            if (fetched) {
                Promise.all(pokemonDatas).then((result) => {
                    setPokemonList(result);
                })
            }
        }
        pokemonData();

        return () => {
            fetched = false;
        }
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemonList }} >
            {children}
        </PokemonContext.Provider >
    )
}