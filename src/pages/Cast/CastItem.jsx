const IMG_URL = 'https://image.tmdb.org/t/p/original';
export default function CastItem({ actorData }) {
  const { name, profile_path, character } = actorData;
  const img = `${IMG_URL}${profile_path}`;
  return (
    <li>
      <img src={img} alt={name} width="200" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
}
