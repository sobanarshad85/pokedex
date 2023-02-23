import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type PokemonListingProps = {
  loading: boolean;
  totalRecords?: number;
  pageLimit?: number;
  pageOffset: number;
  onRowClick: (row: Row) => void;
  onPageSizeChange: (limit: number) => void;
  onPageChange: (newPage: number) => void;
  rows: any[];
  columns: any[];
};

type Row = { row: { col1: string } };

const PokemonListing = ({
  loading = false,
  totalRecords,
  pageLimit = 10,
  onPageSizeChange,
  onPageChange,
  pageOffset,
  rows,
  columns,
  onRowClick,
}: PokemonListingProps) => {
  return (
    <DataGrid
      loading={loading}
      rowCount={totalRecords ?? 100}
      pageSize={pageLimit}
      rowsPerPageOptions={[5, 10, 100]}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      page={pageOffset}
      rows={rows}
      columns={columns}
      paginationMode="server"
      onRowClick={onRowClick}
    />
  );
};

export default PokemonListing;
