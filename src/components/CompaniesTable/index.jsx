import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Button from "../../components/base/Button";

const CompaniesTable = ({ companies, removeCompany }) => {
  return (
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
                <TableCell>{company.productCount || 0}</TableCell>
                <TableCell>
                  <Button title="Remove" onClick={() => removeCompany(company._id)} />
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
  );
};

export default CompaniesTable;
