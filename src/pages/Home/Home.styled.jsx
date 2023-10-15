import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 0 20px;

  .movies-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    padding: 12px;
    margin: 0;

    background-color: #b1ebfb;
    border-radius: 6px;

    list-style: none;
    font-size: 20px;

    .movies-list-item {
      border-radius: 4px;
      transition-duration: 300ms;

      &:hover {
        background-color: #f0ffff9c;
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
