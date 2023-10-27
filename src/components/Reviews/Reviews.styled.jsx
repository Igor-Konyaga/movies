import styled from 'styled-components';

export const StyledReviewsBlock = styled.div`
  padding: 20px;

  background-color: #eaeaeaac;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;

  .error {
    font-size: 24px;
    font-weight: 500;
    color: #ef1616;
  }

  .loader {
    justify-content: center;
  }

  .list-reviews {
    list-style: none;

    .list-reviews-item {
      &:not(:last-child) {
        margin-bottom: 26px;
      }

      .list-reviews-author {
        margin-bottom: 6px;

        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;
