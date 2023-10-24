import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  display: flex;
  gap: 20px;
  padding: 14px 20px;
  margin-bottom: 10px;

  background-color: #eaeaeaac;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .genre-item {
    margin-right: 8px;
  }

  .img-wrraper {
    .btn {
      display: inline-block;
		margin-bottom: 4px;
		padding: 6px 10px;

      background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
      border: 0;
      border-radius: 12px;
      color: #ffffff;
      cursor: pointer;

      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;

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
    .img {
      max-width: 250px;
      border-radius: 8px;
    }
  }

  .title {
    margin-bottom: 20px;
    font-size: 30px;

    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }

  .subtitle {
    margin-bottom: 20px;
  }

  .content-text:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const StyledSection = styled.section`
  .movie-info-list {
    display: flex;
    gap: 16px;
    padding: 16px 12px;
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: 600;
    list-style: none;

    background-color: #eaeaeaac;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;

    .link-item {
      display: inline-block;
      min-width: 60px;
      padding: 0 8px;

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
  }
`;
