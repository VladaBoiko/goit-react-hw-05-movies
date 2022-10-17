import { useState, useEffect } from 'react';
import { dataReviews } from 'API/api';

import ReviewItem from './ReviewItem';

export const Review = () => {
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
  console.log(reviews);

  return (
    <ul>
      {reviews.map(review => {
        return <ReviewItem reviewData={review} key={review.id} />;
      })}{' '}
    </ul>
  );
};
