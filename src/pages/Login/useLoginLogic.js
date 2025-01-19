import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import serverRoutes from "../../routes/serverRoutes";

const useLoginLogic = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const apiUrl = process.env.REACT_APP_SERVER_API;

  useEffect(() => {
    setError("")
  }, [email, password])


  const handleLogin = async () => {
    console.log('Email:', email, 'Password:', password);
    try {
      const response = await axios.post(apiUrl + serverRoutes.login, { email, password });
      console.log(response.data.access_token);


      if (response.data.user.user_type === 'admin') {
        localStorage.setItem('token', response.data.access_token);
        navigate(routes.home);
      }
      else {
        setError("Invalid credentials")
      }
    } catch (error) {
      setError("An error occured try again")
      console.log(error);
    }
  };
  return {
    handleLogin,
    email, setEmail,
    password, setPassword,
    error,
    showPassword, setShowPassword

  }
}
export default useLoginLogic;
