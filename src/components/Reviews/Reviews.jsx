import { useState, useEffect } from 'react';
import { dataReviews } from 'API/api';
import { List } from './Reviews.styled';
import ReviewItem from './ReviewItem';

export default function Review() {
  const [reviews, setReviews] = useState(null);
  const id = JSON.parse(window.localStorage.getItem('currentId'));

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await dataReviews(id);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [id]);
  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.map(review => {
        return <ReviewItem reviewData={review} key={review.id} />;
      })}{' '}
    </List>
  );
}
