import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const handleDeleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleUpdateData = (updatedData) => {
    setData(
      data.map((item) => (item.id === updatedData.id ? updatedData : item))
    );
  };

  return (
    <div>
      <div className="form-section">
        <Form handleAddData={handleAddData} />
      </div>
      <div className="dashboard-container">
        <div className="table-section">
          <Table
            data={data}
            handleDeleteData={handleDeleteData}
            handleUpdateData={handleUpdateData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
