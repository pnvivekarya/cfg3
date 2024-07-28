import React, { useState } from "react";
import Modal from "./Modal";
import PatientTable from "./PatientShow";

const PatientDetails = () => {
  const patientData = {
    name: "John Doe",
    dob: "1990-01-01",
    village: "Springfield",
    city: "Metropolis",
    state: "Gotham",
    lastDoctor: "Dr. Strange",
    analysis: "Dental Analysis",
    symptoms: "Toothache, Bleeding gums",
    diagnosis: "Gingivitis",
    treatment: "Scaling, Antibiotics",
    anaemia: "Normal",
    iron: "Normal",
    cavities: "None",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  return (
    <div>
      <PatientTable patientData={patientData} />
    </div>
  );
};

export default PatientDetails;
