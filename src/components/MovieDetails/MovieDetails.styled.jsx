import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px 20px 0 20px;

  .content{
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
