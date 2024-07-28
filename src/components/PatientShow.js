import React from "react";
import "./PatientDetails.css";

const PatientTable = ({ patientData }) => {
  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th colSpan="2">Patient Information</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(patientData).map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
