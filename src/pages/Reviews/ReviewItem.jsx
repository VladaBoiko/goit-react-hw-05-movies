export default function ReviewItem({ reviewData }) {
  const { author, content, created_at } = reviewData;

  return (
    <li>
      <p>
        Author <span>{author}</span>
      </p>
      <p>Data: {created_at}</p>
      <p>{content}</p>
    </li>
  );
}
