import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import Button from "../../components/base/Button";
import DashboardCard from "../../components/InfoCard";
import './../../style/base.css';
import './style.css';
import useHomeLogic from "./useHomeLogic";

const HomeScreen = () => {
  const {view,handleViewChange,users,companies,ban,unban,removeCompany } = useHomeLogic();
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
            <div className="table-container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Number of Products</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {companies.length > 0 ? (
                    companies.map((company) => (
                      <TableRow key={company._id}>
                        <TableCell>{company.name}</TableCell>
                        <TableCell>
                          {company.productCount || 0}
                        </TableCell>
                        <TableCell>
                          <Button
                            title="Remove"
                            onClick={() => removeCompany(company._id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        No companies available.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
