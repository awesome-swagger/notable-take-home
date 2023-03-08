import React, { useEffect, useState } from 'react';
import type { AppointmentType, PhysicianType } from '../../types';

interface Props {
  selectedPhysician: PhysicianType | null
}

function Appointments({ selectedPhysician }: Props) {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  useEffect(() => {
    if (selectedPhysician === null) return;

    async function fetchData() {
      const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/appointments/${selectedPhysician?.id}`).then(re => re.json());
      setAppointments(data);
    }

    fetchData();
  }, [selectedPhysician]);

  if (!selectedPhysician) {
    return <span>Select a Physican</span>
  }

  return (
    <div className='appointments'>
      <h1>Dr. {selectedPhysician?.firstName} {selectedPhysician?.lastName}</h1>
      <span>{selectedPhysician?.email}</span>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td width={150}>{appointment.name}</td>
              <td width={100}>{appointment.time}</td>
              <td width={200}>{appointment.kind}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;
