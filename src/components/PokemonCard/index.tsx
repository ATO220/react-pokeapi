import { Link } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import styles from "./styles.module.scss";
import { Loader } from "../Loader";
import { PokeTypes } from "../PokemonDetail/components/PokeTypes";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);
  const typeName = pokemon?.types?.[0]?.type?.name as keyof typeof PokeTypes;
  const backgroundSelected = background[typeName];
  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}>
      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
};
