import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 1130px;
  padding: 0 15px 30px;
  margin: 0 auto;

  .navigation {
    padding: 20px;
    margin-bottom: 15px;

    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .header-link {
    color: black;

    text-decoration: none;
    font-size: 20px;
    font-weight: 500;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &.active {
      color: green;
    }
  }
`;
