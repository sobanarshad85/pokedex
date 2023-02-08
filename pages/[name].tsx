import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Details from "pokemon-details";

type PokemonDetails = {
  order: number;
  name: string;
  weight: string;
};
const PokemonDetails = () => {
  const [data, setData] = useState<PokemonDetails | null>(null);
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

  return <div>{data ? <Details data={data} /> : "Data is loading . . ."}</div>;
};

export default PokemonDetails;
