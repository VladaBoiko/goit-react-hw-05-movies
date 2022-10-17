import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      <Form autoComplete="off">
        <Field
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Add search word"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="p" />

        <button type="submit">SEARCH</button>
      </Form>
    </Formik>
  );
}
