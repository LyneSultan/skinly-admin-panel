import { PieChart } from '@mui/x-charts/PieChart';
import React from "react";
import CompaniesTable from "../../components/CompaniesTable";
import UsersTable from "../../components/UsersTable";
import './../../style/base.css';
import './style.css';
import useHomeLogic from "./useHomeLogic";

const HomeScreen = () => {
  const { view, handleViewChange, users, companies, ban, unban, removeCompany } = useHomeLogic();
  const chartData = companies.map((company, index) => ({ id: index, value: company.productCount || 0, label: company.name, }));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1, padding: '20px' }}>

        <div className="flex space-around toggle-Container">
          <div onClick={() => handleViewChange("users")} className={`view-toggle ${view === "users" ? "active" : ""}`}>
            Users
          </div>
          <div onClick={() => handleViewChange("companies")} className={`view-toggle ${view === "companies" ? "active" : ""}`}>
            Companies
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          {view === "users" ? (
            <>
              <h2>Users List</h2>
              <UsersTable users={users} ban={ban} unban={unban} />
            </>
          ) : (
            <>
              <h2>Companies List</h2>

              <div className="flex wrap">

                <CompaniesTable companies={companies} removeCompany={removeCompany} />

                <PieChart
                  colors={['#E179A7', '#CBDDD1', '#FFEFF1']}
                  series={[{ data: chartData }]}
                  width={400}
                  height={200}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
