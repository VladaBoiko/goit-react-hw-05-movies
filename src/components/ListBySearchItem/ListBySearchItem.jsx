import { Link } from 'react-router-dom';
export default function ListBySearchItem({ name, id }) {
  return (
    <li>
      <Link to={`${id}`}>{name}</Link>
    </li>
  );
}
