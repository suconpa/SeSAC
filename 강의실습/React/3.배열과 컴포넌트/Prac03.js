import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [
  {
    id: 1,
    profile:
      "https://images.unsplash.com/photo-1664303167354-6c530671d1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Lee",
    age: 20,
    address: "Seoul",
  },
  {
    id: 2,
    profile:
      "https://images.unsplash.com/photo-1664193017060-60f39584c640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Kim",
    age: 30,
    address: "Busan",
  },
  {
    id: 3,
    profile:
      "https://images.unsplash.com/photo-1664165263956-79ac4d05fa29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Park",
    age: 40,
    address: "Jeju",
  },
  {
    id: 4,
    profile:
      "https://images.unsplash.com/photo-1663877175069-1fe1727f53ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Choi",
    age: 40,
    address: "Jeju",
  },
];

const Prac03 = () => {
  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell>ID</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <img
                    src={row.profile}
                    width="100px"
                    height="100px"
                    alt="사진없음"
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Prac03;
