import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../constants";
import { Diagnosis, Patient } from "../../types";
import {
  setDiagnosisList,
  updatePatientInfo,
  useStateValue,
} from "../../state";
import { Icon } from "semantic-ui-react";

const Index = () => {
  const [{ patients, diagnosis }, dispatch] = useStateValue();
  const { patientId } = useParams<{ patientId: string }>();

  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === patientId
  );

  React.useEffect(() => {
    async function main() {
      try {
        const { data: patientInfo } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${patientId}`
        );
        const { data: diagnosesFromApi } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );

        dispatch(setDiagnosisList(diagnosesFromApi));
        dispatch(updatePatientInfo(patientInfo));
      } catch (err) {
        console.warn(err);
      }
    }

    void main();
  }, [patientId, diagnosis]);

  if (!patient) return <div>Patient not found</div>;

  console.log(patient);
  console.log(diagnosis);

  return (
    <div>
      <h3>
        {patient.name}
        {patient.gender === "male" ? (
          <Icon name="mars" />
        ) : (
          <Icon name="venus" />
        )}
      </h3>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h3>entries</h3>
      <div>
        {patient.entries &&
          patient.entries.map((entry) => {
            return (
              <div key={entry.id}>
                <p>
                  {entry.date} {entry.description}
                </p>

                <ul>
                  {entry.diagnosisCodes &&
                    entry.diagnosisCodes.map((code) => {
                      return (
                        <li key={code}>
                          {code}: {diagnosis[code].name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
