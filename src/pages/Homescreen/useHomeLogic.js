import axios from "axios";
import { useEffect, useState } from "react";
import serverRoutes from "../../routes/serverRoutes";

const useHomeLogic = () => {
  const apiUrl = process.env.REACT_APP_SERVER_API;
  const adminToken = localStorage.token;

  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState("users");

  const getUsers = async () => {
    try {
      console.log(apiUrl + serverRoutes.getUsers);
      const response = await axios.get(apiUrl + serverRoutes.getUsers, {
        headers: {
          "Authorization": adminToken
        }
      });
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getCompanies = async () => {
    try {
      const response = await axios.get(apiUrl + serverRoutes.getCompanies, {
        headers: {
          "Authorization": adminToken
        }
      });
      console.log(response.data);
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  const removeCompany = async (companyId) => {
    try {
      await axios.delete(`${apiUrl}company/${companyId}`, {
        headers: {
          Authorization: adminToken,
        },
      });
      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company._id !== companyId)
      );
      console.log("Company removed successfully");
    } catch (error) {
      console.error("Failed to remove company:", error);
    }
  };


  useEffect(() => {
    getUsers();
    getCompanies();
  }, []);

  const ban = async (userId) => {
    try {
      const response = await axios.get(`${apiUrl}users/ban/${userId}`, {
        headers: {
          Authorization: adminToken,
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
      const response = await axios.get(`${apiUrl}users/unban/${userId}`, {
        headers: {
          Authorization: adminToken,
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

  return {
    ban,
    unban,
    getUsers, users,
    getCompanies, companies, removeCompany,
    handleViewChange, view
  }

}
export default useHomeLogic;
