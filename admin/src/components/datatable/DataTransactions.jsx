import useFetch from "../../hookCustome/fetchData";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const DatatableTransaction = ({ columns }) => {
  const { data } = useFetch(`/user/all/transactions`);
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
