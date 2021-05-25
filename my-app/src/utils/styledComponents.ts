import styled from "styled-components"

export const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    max-width: 650px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ListAddedMovies_DivWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 150px 0px 30px;
  > h5 {
    text-align: center;
    letter-spacing: 2px;
  }

  > .listAdded-Options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15px auto 0;
  }

  > h2 {
    text-align: center;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    background: #fdfdfd;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.05);

    > div {
      max-width: 400px;
      width: auto;
      flex-basis: 33%;
      margin: 40px 0px;

      @media (max-width: 1220px) {
        flex-basis: 50%;
      }

      @media (max-width: 905px) {
        flex-basis: 75%;
      }
    }
  }
`
