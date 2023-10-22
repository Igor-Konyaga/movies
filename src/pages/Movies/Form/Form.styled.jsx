import styled from 'styled-components';

export const StyledForm = styled.form`
  .btn {
    padding: 8px 12px;
    margin-left: 4px;

    border: 2px solid #a7a6a6;
    background-color: transparent;
    border-radius: 6px;
    cursor: pointer;

    transition-duration: 300ms;

    &:hover,
    &:focus {
      border-color: #eb9900;
    }
  }

  .input {
    padding: 8px;
    width: 300px;

    border: 2px solid #a7a6a6;
    border-radius: 6px;

    &:focus {
      outline: none;
      border-color: #eb9900;
    }
  }
`;
