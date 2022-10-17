import { Formik } from 'formik';
import { ErMessage, Input, Forma, Button } from './SearchForm.styled';
const formValues = {
  query: '',
};

export default function SearchForm({ updateQuery }) {
  const handleSubmit = (values, { resetForm }) => {
    updateQuery(values);
    resetForm();
  };
  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <Input
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Add search word"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErMessage name="name" component="p" />

        <Button type="submit">SEARCH</Button>
      </Forma>
    </Formik>
  );
}
