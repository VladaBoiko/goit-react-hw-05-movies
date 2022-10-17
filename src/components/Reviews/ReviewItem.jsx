import { ListItem, Accent, Span, Data, Text } from './Reviews.styled';
export default function ReviewItem({ reviewData }) {
  const { author, content, created_at } = reviewData;
  const data = new Date(created_at).toDateString();
  return (
    <ListItem>
      <Accent>
        Author: <Span>{author}</Span>
      </Accent>
      <Data>{data}</Data>
      <Text>{content}</Text>
    </ListItem>
  );
}
