import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
}) => {
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
