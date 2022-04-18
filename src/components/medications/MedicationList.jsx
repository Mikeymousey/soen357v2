export default function MedicationList({medications}) {
    return (
      <div>
        {medications.map((medication) => (
          <div className="card" key={medication.name}>
            <p className="card-name">{medication.dose}</p>
            <p>{medication.frequency}</p>
            <p>{medication.food}</p>
          </div>
        ))}
      </div>
    );
  }
