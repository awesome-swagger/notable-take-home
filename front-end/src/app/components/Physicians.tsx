import type { PhysicianType } from '../../types';

interface Props {
  data: PhysicianType[],
  selectedPhysician: PhysicianType | null,
  setSelectedPhysician: (physican: PhysicianType) => void
}

function Physicians({ data, selectedPhysician, setSelectedPhysician }: Props) {
  return (
    <div className='physicians'>
      <h2 className='logo-title'>notable</h2>
      <span className='title'>PHYSICANS</span>
      <ul className='physican-list'>
        {data.map(physician => (
          <li
            key={physician.id}
            onClick={() => setSelectedPhysician(physician)}
            className={physician.id === selectedPhysician?.id ? 'selected' : ''}
          >
            {physician.firstName}, {physician.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Physicians;
