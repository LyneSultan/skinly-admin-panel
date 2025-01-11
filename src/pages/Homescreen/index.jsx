import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/base/Button";
import DashboardCard from "../../components/InfoCard";
import './../../style/base.css';
import './style.css';

const HomeScreen = () => {
  const apiUrl = process.env.REACT_APP_SERVER_API;
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState("users");
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
  const ban = async (userId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx5bmUiLCJzdWIiOiI2NzZmMzE2MjE1Y2FiMjUyMGM1NjI4MGIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzY2MzI5NDQsImV4cCI6MTczNjYzNjU0NH0.EWJS3pmpEOtK8w72m84LdxOTyemeOOJCqpXuPguE_dA"; // Static token
      const response = await axios.get(`http://localhost:3000/users/ban/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      const user = response.data;

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === user._id ? { ...u, ban: user.ban } : u
        )
      );

    } catch (error) {
      console.error("Error banning user:", error);
    }
  };

  const unban = async (userId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx5bmUiLCJzdWIiOiI2NzZmMzE2MjE1Y2FiMjUyMGM1NjI4MGIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzY2MzI5NDQsImV4cCI6MTczNjYzNjU0NH0.EWJS3pmpEOtK8w72m84LdxOTyemeOOJCqpXuPguE_dA"; // Static token
      const response = await axios.get(`http://localhost:3000/users/unban/${userId}`, {
        headers: {
          Authorization: token,
        },
      });

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, ban: false } : user
        )
      );
    } catch (error) {
      console.error("Error unbanning user:", error);
    }
  };

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div>
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-logo">
            Admin Panel
          </div>
          <div class="navbar-links">
            <a href="/dashboard" class="navbar-link">Dashboard</a>
            <a href="/add-company" class="navbar-link">Add Company</a>
          </div>
        </div>
      </nav>
      <div></div>
      <div class='flex' style={{ gap: '20px' }}>
        <DashboardCard
          number="32"
          text="New User This Week"
          icon="https://cdn-icons-png.flaticon.com/512/747/747376.png"
        />

      </div>
      <div className="flex space-around">
        <Button title={"hello"} />
        <button onClick={() => handleViewChange("users")} class="view-toggle-btn">Users</button>
        <button onClick={() => handleViewChange("companies")} class="view-toggle-btn">Companies</button>
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
                          title={user.ban ? "Unban" : "Ban"}
                          onClick={() => user.ban ? unban(user._id) : ban(user._id)}
                        />                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <>
            <h2>Companies List</h2>
            <div class="companies-list">
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
