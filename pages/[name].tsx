import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PokemonDetails } from "components";

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
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setData(data);
        });
      })
      .catch()
      .finally();
  };

  return (
    <div>{data ? <PokemonDetails data={data} /> : "Data is loading . . ."}</div>
  );
};

export default Pokemon;
