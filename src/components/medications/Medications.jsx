import React, { useReducer, useState } from 'react';
import './medications.css';
import MedicationList from "./MedicationList.jsx";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}



function Medications() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const [medications, updateMedications] = useState([]);

    const addMedication = (medicationInfo) => {
        updateMedications([...medications, medicationInfo]);
    };
    console.log(medications)
    

    const [medicationInfo, setMedicationInfo] = useState({
        name: "",
        dose: "",
        frequency: "",
        food: "",
      });

    const handleSubmit = event => {
        event.preventDefault();
        console.log(medicationInfo);
        setMedicationInfo({ name: "",
        dose: "",
        frequency: "",
        food: ""});
        setSubmitting(true);

        setTimeout(() => {
          setSubmitting(false);
        }, 3000)
      }

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        });
        setMedicationInfo({ ...medicationInfo, [event.target.name]: event.target.value });
    }


    return (
        <div>
            <h1>Medications</h1>
            <div className="wrapper">
                <br></br>
                <h2>Enter your medications:</h2>
                <br></br>
                {submitting &&
                    <div>
                        You are submitting the following:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                  </div>
                }
                <br></br>
                 <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input name="name" onChange={handleChange}/>
                        </label>

                        <label>
                            <p>Doses</p>
                            <input name="dose" onChange={handleChange}/>
                        </label>

                        <label>
                            <p>Frequency</p>
                            <input name="frequency" onChange={handleChange}/>
                        </label> 

                        <label>
                            <p>Take with Food?</p>
                            <input type="checkbox" name="food" onChange={handleChange} />
                        </label>

                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="App">
                <MedicationList medications={medications} />
            </div>
        </div>
    )
}

export default Medications;