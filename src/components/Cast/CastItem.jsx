import { ListItem, Info, Accent } from './Cast.styled';
const IMG_URL = 'https://image.tmdb.org/t/p/original';
let imgPath = '';
export default function CastItem({ actorData }) {
  const { name, profile_path, character } = actorData;
  if (!profile_path) {
    imgPath =
      'https://www.designbolts.com/wp-content/uploads/2015/12/Minion-404-funny-page-404-error-design.jpg';
  }
  if (profile_path) {
    imgPath = `${IMG_URL}${profile_path}`;
  }
  const img = `${imgPath}`;
  return (
    <ListItem>
      <img src={img} alt={name} width="380" height="569.7" />
      <Info>
        <Accent>{name}</Accent>
        <p>Character: {character}</p>
      </Info>
    </ListItem>
  );
}
