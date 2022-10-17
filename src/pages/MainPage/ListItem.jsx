import { Link } from 'react-router-dom';
export default function MainPageItem({ name, id }) {
  return (
    <li>
      <Link to={`${id}`}>{name}</Link>
    </li>
  );
}
