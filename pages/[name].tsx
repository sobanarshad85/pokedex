import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PokemonDetails } from "components";
import { fetchNetworkData } from "utils";

type Pokemon = {
  order: number;
  name: string;
  weight: string;
};
const Pokemon = () => {
  const [data, setData] = useState<Pokemon | null>(null);
  const router = useRouter();
  const { name } = router.query;
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const res: any = await fetchNetworkData(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    setData(res);
  };

  return (
    <div>{data ? <PokemonDetails data={data} /> : "Data is loading . . ."}</div>
  );
};

export default Pokemon;
