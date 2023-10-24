import { StyledForm } from './Form.styled';

export const Form = ({ onSumbit }) => {
  const handleSubmitForm = e => {
    e.preventDefault();

    const inputValue = e.currentTarget.elements.searchQuery.value;

    console.log(e.currentTarget.elements.searchQuery.value);

    onSumbit(inputValue);

    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <input className="input" name="searchQuery" type="text" />
      <button className="btn" type="submit">
        Search
      </button>
    </StyledForm>
  );
};
