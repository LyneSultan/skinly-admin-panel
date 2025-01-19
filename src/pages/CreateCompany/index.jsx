import { Box, Button, InputLabel, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/base/Input';
import './style.css';
import useCompanyLogic from './useCompanyLogic';

const AddCompany = () => {
  const { companyName, setCompanyName, companyEmail, setCompanyEmail, handleFileUpload, file, response, handleSubmit } = useCompanyLogic();

  useEffect(() => {
    if (response) {
      toast.success("Company Created!", {
        autoClose: 3000,
      });
    }
  }, [companyName]);

  return (
    <Box className="container">
      <Paper className="paper">

        <Typography variant="h5" gutterBottom> Add Company</Typography>

        <Box className="input-box">
          <Input label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </Box>

        <Box className="input-box">
          <Input label="Company Email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
        </Box>


        <ToastContainer />


        <Box className="upload-box">
          <InputLabel>Upload Supporting File</InputLabel>
          <Button variant="outlined" component="label" fullWidth className="button">

            Choose File
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
          {file && (
            <Typography variant="body2" color="text.secondary" mt={1}>Selected File: {file.name}</Typography>
          )}
        </Box>
        {response && (
          <Typography variant="body2" color="text.secondary" mt={1}> {response}</Typography>
        )}

        <Button variant="contained" fullWidth sx={{ backgroundColor: "#D16F9A" }} onClick={handleSubmit}> Submit </Button>
      </Paper>
    </Box >
  );
};

export default AddCompany;
