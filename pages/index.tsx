import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemons,
  setOffset,
  setLoading,
  setPageLimit,
} from "../redux/reducers";
import { useRouter } from "next/router";
import { PokemonListing } from "components";

const Page = () => {
  const pokemons = useSelector((state: State) => state.pokemons);
  const pageOffset = useSelector((state: State) => state.pageOffset);
  const loading = useSelector((state: State) => state.loading);
  const pageLimit = useSelector((state: State) => state.pageLimit);
  const totalRecords = useSelector((state: State) => state.totalRecords);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetchPokemon();
  }, [pageOffset, pageLimit]);

  const fetchPokemon = () => {
    dispatch(setLoading(true));
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        pageOffset * pageLimit
      }&limit=${pageLimit}`
    )
      .then((res) => {
        res.json().then((data) => dispatch(addPokemons(data)));
      })
      .catch(() => dispatch(setLoading(false)));
  };

  const rows = useMemo(() => {
    return pokemons.map((pokemon: Pokemon, index: number) => {
      return {
        id: index + 1 + pageLimit * pageOffset,
        col1: pokemon.name,
      };
    });
  }, [pokemons, pageLimit, pageOffset]);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "col1", headerName: "Name1", width: 250 },
  ];

  const handleRowClick = (row: Row) => {
    router.push({
      pathname: `/${row.row.col1}`,
    });
  };

  return (
    <div style={{ display: "flex", flex: 1, height: "70vh", width: "100%" }}>
      <PokemonListing
        loading={loading}
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        onPageChange={(newPage: number) => dispatch(setOffset(newPage))}
        onPageSizeChange={(limit: number) => dispatch(setPageLimit(limit))}
        pageOffset={pageOffset}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default Page;

type Row = { row: { col1: string } };
type Pokemon = { name: string; url: string };
type State = {
  pokemons: Pokemon[];
  pageOffset: number;
  loading: boolean;
  pageLimit: number;
  totalRecords: number;
};
