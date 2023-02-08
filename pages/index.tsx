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
import { fetchNetworkData, makeRows } from "utils";

const Page = () => {
  const { pokemons, pageOffset, loading, pageLimit, totalRecords } =
    useSelector((state: State) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetchPokemon();
  }, [pageOffset, pageLimit]);

  const fetchPokemon = async () => {
    dispatch(setLoading(true));
    const res: any = await fetchNetworkData(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        pageOffset * pageLimit
      }&limit=${pageLimit}`
    );
    if (!res) return dispatch(setLoading(false));
    else dispatch(addPokemons(res));
  };

  const rows = useMemo(
    () => makeRows(pokemons, pageLimit, pageOffset),
    [pokemons, pageLimit, pageOffset]
  );

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
