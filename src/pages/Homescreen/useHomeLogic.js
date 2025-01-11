import axios from "axios";
import { useEffect, useState } from "react";
import serverRoutes from "../../routes/serverRoutes";

const useHomeLogic = () => {
  const apiUrl = process.env.REACT_APP_SERVER_API;
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState("users");
  const getUsers = async () => {
    try {
      console.log(apiUrl + serverRoutes.getUsers);
      const response = await axios.get(apiUrl+serverRoutes.getUsers);
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:3000/company/");
      console.log(response.data);
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
  return {
    ban,
    unban,
    getUsers,users,
    getCompanies, companies,
    handleViewChange,view
  }



}
export default useHomeLogic;
