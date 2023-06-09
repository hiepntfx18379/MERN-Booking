import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useFetch from "../../hookCustome/fetchData";

const DatatableTransaction = ({ columns }) => {
  const { data, reFetch } = useFetch(`/user/all/transactions`);
  const [listData, setListData] = useState();

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DatatableTransaction;
