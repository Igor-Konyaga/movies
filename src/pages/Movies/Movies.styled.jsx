import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 16px 20px;

  .movies-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 12px;

    background-color: #eaeaeaac;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;

    list-style: none;
    font-size: 20px;

    .movies-list-item {
      border-radius: 6px;
      font-weight: 600;

      padding: 6px 8px;

      cursor: pointer;

      &:first-child {
        margin-top: 8px;
      }
      &:last-child {
        margin-bottom: 8px;
      }

      &:hover,
      &:focus {
        background-image: linear-gradient(to bottom right, #fd8451, #ffbd6f);
        color: #fbf9f9;
      }
    }
  }
`;
