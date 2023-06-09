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
    field: "dateStart",
    headerName: "Date start",
    width: 150,
  },
  {
    field: "dateEnd",
    headerName: "Date end",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
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
    width: 100,
  },
];
