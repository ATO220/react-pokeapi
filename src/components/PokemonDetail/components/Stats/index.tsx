import { HeightIcon, WeightIcon } from "../../../../assets/stats";
import { IPokemon } from "../../../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight! * 0.1} Kg</span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{(pokemon?.height! * 0.1).toFixed(2)} M</span>
        <p>Height</p>
      </div>
    </div>
  );
};
