import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";
import axios from "axios";

export const usePokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  const fetchPokemon = async () => {
    if (url) {
      const { data } = await axios.get(url);
      setPokemon(data as IPokemon);
    } else if (id) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data as IPokemon);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};
