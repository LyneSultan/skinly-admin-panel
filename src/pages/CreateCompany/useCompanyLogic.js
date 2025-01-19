import axios from "axios";
import { useState } from "react";

const useCompanyLogic = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const adminToken = localStorage.token;
  const apiUrl = process.env.REACT_APP_SERVER_API;

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    console.log('Company Name:', companyEmail);
    console.log('Logo:', logo);
    console.log('File:', file);
    try {
      const formData = new FormData();

      formData.append('company_logo', 'logo');
      formData.append('scraping_file', 'file.name');
      formData.append('file', file);
      formData.append('name', companyName);
      formData.append('email', companyEmail);


      const response = await axios.post(`${apiUrl}/company`, formData, {
        headers: {
          Authorization: adminToken,
        },
      }
      );

      if (response.status === 201) {
        setResponse("Company created")
      }
      else {
        setResponse("An error occured")
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    companyName, setCompanyName,
    companyEmail, setCompanyEmail,
    setLogo, logo,
    handleFileUpload, file,
    response,
    handleSubmit
  }



}
export default useCompanyLogic;
