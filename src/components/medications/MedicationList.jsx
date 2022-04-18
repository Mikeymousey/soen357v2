

export default function MedicationList({medications}) {

    localStorage.setItem('myArray', JSON.stringify(medications));
    
    return (
      <div>
        {medications.map((medication) => (
          <div className="card" key={medication.name}>
            <p className="card-name">{medication.name}</p>
            <p>{medication.dose}</p>
            <p>{medication.frequency}</p>
            <p>{medication.food}</p>
          </div>
        ))}
      </div>
    );
  }