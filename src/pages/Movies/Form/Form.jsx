import { StyledForm } from './Form.styled';

export const Form = () => {
  return (
    <StyledForm>
      <input className="input" type="text" />
      <button className="btn" type="submit">
        Search
      </button>
    </StyledForm>
  );
};
