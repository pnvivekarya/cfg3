import React from "react";
import "./Modal.css";

const Modal = ({ onClose, data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}></button>
        <h2>Patient Details</h2>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Date of Birth:</strong> {data.dob}
        </p>
        <p>
          <strong>Village:</strong> {data.village}
        </p>
        <p>
          <strong>City:</strong> {data.city}
        </p>
        <p>
          <strong>State:</strong> {data.state}
        </p>
        <p>
          <strong>Last Attending Doctor:</strong> {data.lastDoctor}
        </p>
        <p>
          <strong>Analysis Done:</strong> {data.analysis}
        </p>
        <p>
          <strong>Symptoms:</strong> {data.symptoms}
        </p>
        <p>
          <strong>Diagnosis:</strong> {data.diagnosis}
        </p>
        <p>
          <strong>Treatment Plan:</strong> {data.treatment}
        </p>
        <p>
          <strong>Anaemia Level:</strong> {data.anaemia}
        </p>
        <p>
          <strong>Iron Level:</strong> {data.iron}
        </p>
        <p>
          <strong>Cavities Exist:</strong> {data.cavities}
        </p>
        <img src={data.image} alt="Patient Face" className="patient-image" />
      </div>
    </div>
  );
};

export default Modal;
