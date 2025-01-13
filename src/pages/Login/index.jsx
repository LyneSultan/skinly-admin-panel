import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/base/Input';
import './style.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Email:', email, 'Password:', password);
    try {
      const response = await axios.post("http://localhost:3000/auth/login", { email, password });
      console.log(response.data);
      if (response.data.user.user_type === 'admin') {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="login-container">
      <Paper elevation={6} className="login-paper">
        <Box className="login-form">
          <Avatar className="login-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            sx={{ mt: 3 }}
          >
            <Input
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#D16F9A" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
