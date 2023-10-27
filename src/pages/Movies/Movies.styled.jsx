import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 16px 20px;

  .movies-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    padding: 0;
    margin: 0;

    background-color: #eaeaeaac;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;

    list-style: none;
    font-size: 20px;

    .loader {
      justify-content: center;
    }
	 .error {
    font-size: 24px;
    font-weight: 500;
    color: #ef1616;
  }

    .movies-list-item {
      border-radius: 6px;
      font-weight: 600;

      padding: 0 10px;

      cursor: pointer;

      &:first-child {
        margin-top: 10px;
      }
      &:last-child {
        margin-bottom: 10px;
      }

      &:hover,
      &:focus {
        background-image: linear-gradient(to bottom right, #fd8451, #ffbd6f);
        color: #fbf9f9;
      }
    }

    .movies-list-link {
      padding: 6px 10px;
      display: block;

      text-decoration: none;
      color: inherit;
    }
  }
`;
