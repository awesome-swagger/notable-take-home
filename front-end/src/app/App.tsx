import React, { useEffect, useState } from 'react';
import type { PhysicianType } from '../types';

import Physicians from './components/Physicians';
import Appointments from './components/Appointments';

function App() {
  const [physicians, setPhysicians] = useState<PhysicianType[]>([]);
  const [selectedPhysician, setSelectedPhysician] = useState<PhysicianType | null>(null);

  useEffect(() => {
    async function fetchPhysicians() {
      const data = await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/physicians').then(re => re.json());
      setPhysicians(data);
    }

    fetchPhysicians();
  }, []);

  return (
    <div className='app'>
      <Physicians
        data={physicians}
        selectedPhysician={selectedPhysician}
        setSelectedPhysician={setSelectedPhysician}
      />
      <Appointments selectedPhysician={selectedPhysician} />
    </div>
  );
}

export default App;
