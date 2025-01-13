import { Box, Button, InputLabel, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Input from '../../components/base/Input';

const AddCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [file, setFile] = useState(null);

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async() => {
    console.log('Company Name:', companyName);
    console.log('Logo:', logo);
    console.log('File:', file);
    try {
      const formData = new FormData();

      formData.append('company_logo', "logo");
      formData.append('scraping_file', "file");
      formData.append('file', file);
      formData.append('name', companyName);
      formData.append('email', companyEmail);

      const response = await axios.post("http://192.168.10.128:3000/company/", formData, {
        headers: {
          "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEiLCJzdWIiOiI2NzcxYzAzNDZjYTUyMTIxNzcwYTk3NjciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzY3NjYzMDIsImV4cCI6MTczNjc2OTkwMn0.Gnmkb4GiBpa3LUhnEJNbpqupyUFMbXQHJC5iLJvZ8GQ",
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          width: 400,
          textAlign: 'center',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" gutterBottom> Add Company</Typography>

        <Box sx={{ marginBottom: 3 }}>
          <Input label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <Input label="Company Name"  value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <InputLabel>Upload Company Logo</InputLabel>
          <Button variant="outlined" component="label" fullWidth  sx={{ marginTop: 1 }}  >
            Choose File
            <input   type="file"  accept="image/*" hidden onChange={handleLogoUpload}  />
          </Button>

          {logo && (
            <Typography variant="body2" color="text.secondary" mt={1}> Selected File: {logo.name} </Typography>
          )}
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <InputLabel>Upload Supporting File</InputLabel>
          <Button variant="outlined"component="label" fullWidth sx={{ marginTop: 1 }}>
            Choose File
            <input type="file" hidden onChange={handleFileUpload}/>
          </Button>
          {file && (
            <Typography variant="body2" color="text.secondary" mt={1}>Selected File: {file.name}</Typography>
          )}
        </Box>

        <Button variant="contained" color="primary" fullWidth  onClick={handleSubmit}> Submit </Button>
      </Paper>
    </Box>
  );
};

export default AddCompany;
