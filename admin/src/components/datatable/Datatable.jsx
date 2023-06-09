import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hookCustome/fetchData";
import axios from "axios";
import { Button } from "@mui/material";

const Datatable = ({ columns }) => {
  const location = useLocation();
  let path = location.pathname.split("/")[1];
  const { data, reFetch } = useFetch(`${path}`);
  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${path}/delete/${id}`);
      setListData(reFetch());
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Button className="cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <Button
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </Button>
          </Button>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
