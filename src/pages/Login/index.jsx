import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import Input from '../../components/base/Input';
import './style.css';
import useLoginLogic from './useLoginLogic';

const Login = () => {
  const {
    handleLogin,
    email, setEmail,
    password, setPassword,
    error,
    showPassword, setShowPassword

  } = useLoginLogic();

  return (
    <Box className="login-container">
      <Paper elevation={6} className="login-paper">
        <Box className="login-form">

          <Avatar className="login-avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5"> Admin Login </Typography>

          <Box component="form" noValidate onSubmit={(e) => { e.preventDefault(); handleLogin(); }} sx={{ mt: 3 }}>

            <Input id="email" label="Email Address" type="email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input id="password" label="Password" type={showPassword ? "text" : "password"}
              value={password} onChange={(e) => setPassword(e.target.value)} />

            {error && <p>{error}</p>}

            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  color="primary" />
              }
              label="Show Password"
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: "#D16F9A" }} >Login </Button>

          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
