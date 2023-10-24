import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 20px;
  .btn {
    display: inline-block;
    min-width: 80px;
    margin-left: 10px;

    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;

    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;

    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;

    &:focus,
    &:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
  }

  .input {
    padding: 8px;
    width: 300px;
    min-height: 22px;

    border: 2px solid #979696;
    border-radius: 6px;

    font-size: 18px;

    &:focus {
      outline: none;
      border-color: #ff9a5a;
    }
  }
`;
