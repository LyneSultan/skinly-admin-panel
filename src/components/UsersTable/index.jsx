import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Button from "../../components/base/Button";

const UsersTable = ({ users, ban, unban }) => {
  return (
    <div className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Ban Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.ban ? "Banned" : "Active"}</TableCell>
              <TableCell>
                <Button title={user.ban ? "Unban" : "Ban"} onClick={() => user.ban ? unban(user._id) : ban(user._id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
