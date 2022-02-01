import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../constants";
import { Patient } from "../../types";
import { updatePatientInfo, useStateValue } from "../../state";
import { Icon } from "semantic-ui-react";

const Index = () => {
  const [{ patients }, dispatch] = useStateValue();
  const { patientId } = useParams<{ patientId: string }>();

  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === patientId
  );

  React.useEffect(() => {
    if (patient?.ssn) return;

    const fetchPatient = async () => {
      try {
        const { data: patientWithFullInfo } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${patientId}`
        );
        dispatch(updatePatientInfo(patientWithFullInfo));
      } catch (error) {
        console.error(error);
      }
    };
    void fetchPatient();
  }, [patientId]);

  if (!patient) return <div>Patient not found</div>;

  return (
    <div>
      <h3>
        {patient.name}{" "}
        {patient.gender === "male" ? (
          <Icon name="mars" />
        ) : (
          <Icon name="venus" />
        )}
      </h3>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h3>
        entries
      </h3>
      <div>
        {patient.entries.map((entry) => (
            <div key={entry.id}>
              <p >{entry.date} {entry.description}</p>
              {entry?.diagnosisCodes ? (
                  <ul>
                    {entry.diagnosisCodes.map(code => (
                        <li key={code}>{code}</li>
                    ))}
                  </ul>
              ): null}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
