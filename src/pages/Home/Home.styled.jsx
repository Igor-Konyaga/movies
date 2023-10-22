import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 16px 20px;

  background-color: #eaeaeaac;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;

  .title {
    margin-bottom: 16px;
  }

  .movies-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    padding: 0;
    margin: 0;

    list-style: none;
    font-size: 20px;

    .movies-list-item {
      border-radius: 6px;
      font-weight: 600;

      &:hover,
      &:focus {
        background-image: linear-gradient(to bottom right, #fd8451, #ffbd6f);
        color: #090909;
      }
    }
  }
  .movies-list-link {
    padding: 6px 10px;
    display: block;

    text-decoration: none;
    color: inherit;

  }
`;
