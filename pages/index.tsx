import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPokemons } from "../redux/reducers";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";

type Row = { row: { col1: string } };
type Pokemon = { name: string; url: string };

const Page = () => {
  const pokemons = useSelector(
    (state: { pokemons: Pokemon[] }) => state.pokemons
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        res.json().then((data) => dispatch(addPokemons(data.results)));
      })
      .catch()
      .finally();
  };

  const rows = useMemo(() => {
    return pokemons.length >= 1
      ? pokemons.map((pokemon: Pokemon, index: number) => {
          return {
            id: index + 1,
            col1: pokemon.name,
          };
        })
      : [];
  }, [pokemons]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  const handleRowClick = (row: Row) => {
    router.push({
      pathname: `/${row.row.col1}`,
    });
  };

  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          pageSize={10}
          // rowsPerPageOptions={[100]}
          // page={0}
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Page;
