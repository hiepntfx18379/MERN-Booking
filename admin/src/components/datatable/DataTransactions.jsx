import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useFetch from "../../hookCustome/fetchData";
import { groupDate } from "../../datatablesource";

const DatatableTransaction = ({ columns }) => {
  const { data, reFetch } = useFetch(`/user/all/transactions`);
  const [listData, setListData] = useState();

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DatatableTransaction;
