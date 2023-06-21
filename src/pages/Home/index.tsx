import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball"
import { PokemonList } from "../../components/PokemonList";
import styles from "./styles.module.scss";
import { PokemonContext } from "../../context/PokemnContext";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { Filters } from "../../components/Filters";
export const Home = () => {
    const { pokemonsFiltered } = useContext(PokemonContext)
    const { page, nextPage, previousPage, backtoHome} = usePagination()

    const perPage = 12

    return (
        <div className={styles.home}>
            <header>
                <div onClick={backtoHome}>
                    <PokeballIconSmall />
                    <span>Pokédex</span>
                </div>
            </header>
            <Filters/>
            <PokemonList 
            pokemonUrls={pokemonsFiltered}
            page={page}
            perPage={perPage}
            />
            <Pagination
                page={page}
                perPage={perPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxItems={pokemonsFiltered?.length}
                />
        </div>
    )
}