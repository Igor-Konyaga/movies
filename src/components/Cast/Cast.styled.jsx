import styled from 'styled-components';

export const StyledCastBlock = styled.div`
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

  .list-cast {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;

    list-style: none;

    .list-cast-item {
      display: flex;
      flex-direction: column;
		
      width: 20%;


      .img-wrraper {
        margin-bottom: 6px;

		  flex-grow: 1;

        .list-cast-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;

          border-radius: 6px;
        }
      }

      .list-cast-info {
        margin-bottom: 6px;
      }

    }
  }
`;
