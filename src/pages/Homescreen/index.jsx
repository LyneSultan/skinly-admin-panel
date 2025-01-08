import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './../../style/base.css';
import './style.css';

const HomeScreen = () => {
  const apiUrl = process.env.REACT_APP_SERVER_API;
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div >
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      <div class="table-container" >
        <Table >
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
                  <Button
                    variant="contained"
                    color={user.ban ? "success" : "error"}
                  >
                    {user.ban ? "Unban" : "Ban"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HomeScreen;
