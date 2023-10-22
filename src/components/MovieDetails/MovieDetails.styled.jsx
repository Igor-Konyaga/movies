import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px 20px 0 20px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .genre-item {
    margin-right: 8px;
  }

  .img-wrraper {
    .img {
      max-width: 250px;
      border-radius: 8px;
    }
  }

  .title {
    margin-bottom: 20px;
  }

  .subtitle {
    margin-bottom: 20px;
  }

  .content-text:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const StyledSection = styled.section`
  padding: 20px;

  .movie-info-list {
	  display: flex;
	  gap: 16px;
	  padding: 16px 12px;
	  
	  font-size: 20px;
	  font-weight: 600;
	  list-style: none;

	  background-color: #f3efef;
	 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
