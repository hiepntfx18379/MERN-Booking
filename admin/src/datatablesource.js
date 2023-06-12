import moment from "moment";
import { GridColumnGroupingModel } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export const userColumns = [
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 100,
  },
  {
    field: "phonenumber",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const transactionColumn = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User",
    width: 100,
  },
  {
    field: "hotelname",
    headerName: "Hotel",
    width: 200,
  },
  {
    field: "room",
    headerName: "Room",
    width: 150,
  },
  {
    field: "Date",
    valueGetter: (params) => {
      return `${moment(params.row.dateStart).format("DD/MM/YYYY")} - ${moment(
        params.row.dateEnd,
      ).format("DD/MM/YYYY")}`;
    },
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    valueGetter: (params) => {
      return `$${params.row.price}`;
    },
    width: 100,
  },
  {
    field: "payment",
    headerName: "Payment method",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => BgStatus(params.row.status),
    width: 100,
  },
];

const BgStatus = (status) => {
  if (status === "Booked")
    return <Button sx={{ bgcolor: "pink", color: "black" }}>Booked</Button>;
  if (status === "Checkout")
    return (
      <Button sx={{ bgcolor: "#DCC8DE", color: "black" }}>Checkout</Button>
    );
  if (status === "Checkin")
    return <Button sx={{ bgcolor: "green", color: "black" }}>Checkin</Button>;
};
