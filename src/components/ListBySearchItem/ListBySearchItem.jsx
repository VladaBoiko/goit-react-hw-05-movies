import {
  Item,
  NavigationLink,
  Info,
  Accent,
} from '../../pages/MainPage/MainPage.styled';
const IMG_URL = 'https://image.tmdb.org/t/p/original';
let imgPath = '';
export default function ListBySearchItem({ itemData }) {
  const { id, original_title, release_date, poster_path } = itemData;

  if (!poster_path) {
    imgPath =
      'https://www.designbolts.com/wp-content/uploads/2015/12/Minion-404-funny-page-404-error-design.jpg';
  }
  if (poster_path) {
    imgPath = `${IMG_URL}${poster_path}`;
  }
  const img = `${imgPath}`;
  return (
    <Item>
      <NavigationLink to={`${id}`}>
        <img src={img} alt={original_title} width="380" height="569.7" />
        <Info>
          <Accent>{original_title}</Accent>
          <p>Release date: {release_date}</p>
        </Info>
      </NavigationLink>
    </Item>
  );
}
