import React, { useReducer, useState } from 'react';
import './medications.css';


const formReducer = (state, event) => {
  return {
      ...state,
      [event.name]: event.value
  }
}


export default function MedicationForm({addMedication}) {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const [medications, updateMedications] = useState();

  console.log(medications);
  
  const [medicationInfo, setMedicationInfo] = useState({
    name: "",
    dose: "",
    frequency: "",
    food: "",
  });

  const handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
      setFormData({
          name: event.target.name,
          value: isCheckbox ? event.target.checked : event.target.value,
      });
      localStorage.setItem([event.target.name], event.target.value);

    setMedicationInfo({ ...medicationInfo, [event.target.name]:  event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(medicationInfo);

    addMedication(medicationInfo);
    setMedicationInfo({ name: "",
        dose: "",
        frequency: "",
        food: ""});

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)

  };

  return (
    <div>
      <h1>Medications</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}> 
          <div>
            <h3>Enter your Medications</h3>
            {submitting &&
              <div>
                 <br></br>
                  You are submitting the following:
                  <ul>
                      {Object.entries(formData).map(([name, value]) => (
                          <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                      ))}
                  </ul>
                  <br></br>
            </div>
            }
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={medicationInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="dose"
              placeholder="Dose"
              value={medicationInfo.dose}
              onChange={handleChange}

            />
          </div>
          <div>
            <input
              type="text"
              name="frequency"
              placeholder="Frequency"
              value={medicationInfo.frequency}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              <p>Take with Food?</p>
              <select name="food" onChange={handleChange} value={medicationInfo.food || ''}>
                <option value="">--Please choose an option--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </label>  
          </div>
          <div>
            <button>Submit Medication</button>
          </div>
        </form>
      </div>
    </div>
  );
}