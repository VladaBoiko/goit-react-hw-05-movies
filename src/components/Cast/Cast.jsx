import { useState, useEffect } from 'react';
import { dataAuthors } from 'API/api';
import { List } from './Cast.styled';
import CastItem from './CastItem';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const id = JSON.parse(window.localStorage.getItem('currentId'));

  useEffect(() => {
    async function getActors() {
      try {
        const actors = await dataAuthors(id);
        setActors(actors.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getActors();
  }, [id]);

  if (!actors) {
    return;
  }

  return (
    <List>
      {actors.map(actor => {
        return <CastItem actorData={actor} key={actor.id} />;
      })}{' '}
    </List>
  );
}
