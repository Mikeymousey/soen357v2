import { useState } from "react";
import MedicationForm from "./MedicationForm.jsx";
import MedicationList from "./MedicationList.jsx";
import "./medications.css";

function Medications() {
    // Retrieve the array from local storage
    var array = localStorage.getItem('myArray');
    // Parse it to something usable in js
    array = JSON.parse(array);

    if (array === null) {
      array = [];
    }
  
    // here we create an array state to store the contact form data
  const [medications, updateMedications] = useState(array);

  const addMedication = (medication) => {
    updateMedications([...medications, medication]);
  };

  return (
    <div className="App">
      <MedicationForm addMedication={addMedication} />
      <MedicationList medications={medications} />
    </div>
  );
}

export default Medications;
