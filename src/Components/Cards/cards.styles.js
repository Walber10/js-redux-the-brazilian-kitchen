import styled from "styled-components";

export const WrapperCards = styled.div`
  margin: 0px 0px 80px 0px;
  i {
      color: black;
      font-size: 30px
  }
  .cards_container {
    display: flex;
    .card {
      width: 314px;
      height: 329px;
      border-radius: 30px;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card_left {
      background-size: cover;
      border: none;
      margin: 0px 20px 0px 0px;
      button {
        color: var(--card-recipe);
      }
    }

    .card_right {
      background-size: cover;
      margin: 0px 0px 0px 20px;
      border: none;
      button {
        color: var(--card-pantry);
      }
    }

    button {
      font-family: var(--bodyFont);
      font-size: 20px;
      font-weight: 600;
      width: 165px;
      height: 45px;
      background-color: white;
      border: none;
      border-radius: 23px;
    }
  }
`;
