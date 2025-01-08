import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './../../style/base.css';
import './style.css';

const HomeScreen = () => {
  const apiUrl = process.env.REACT_APP_SERVER_API;
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState("users"); // State to track the current view ('users' or 'companies')

  // Fetch Users
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:3000/company/");
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    getUsers();
    getCompanies();
  }, []);

  // Handle switching between views
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            Admin Panel
          </div>
          <div className="navbar-links">
            <a href="/dashboard" className="navbar-link">Dashboard</a>
            <a href="/add-company" className="navbar-link">Add Company</a>
          </div>
        </div>
      </nav>

      <div className="flex space-around">
        <button onClick={() => handleViewChange("users")} className="view-toggle-btn">Users</button>
        <button onClick={() => handleViewChange("companies")} className="view-toggle-btn">Companies</button>
      </div>

      <div style={{ padding: '20px' }}>
        {view === "users" ? (
          <>
            <h2>Users List</h2>
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
          </>
        ) : (
          <>
            <h2>Companies List</h2>
            <div className="companies-list">
              {companies.length > 0 ? (
                <ul>
                  {companies.map((company) => (
                    <li key={company._id}>{company.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No companies available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
