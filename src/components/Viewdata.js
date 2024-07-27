import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PatientDetail.css"; // Import the CSS file

export default class Viewdata extends Component {
  render() {
    // Sample patient data array
    const patients = [
      { name: "John Doe", age: 14, gender: "Male", TreatBY: "Doc1" },
      { name: "Jane Smith", age: 9, gender: "Female", TreatBY: "Doc2" },
      { name: "Sam Johnson", age: 13, gender: "Male", TreatBY: "Doc3" },
      {
        name: "Alice Brown",
        age: 12,
        gender: "Female",
        TreatBY: "Doc4",
      },
    ];

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4 title">Patient Information</h1>
        <div className="table-container">
          <table className="table table-striped table-hover">
            <thead className="thead-custom">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">TreatBY</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.TreatBY}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
