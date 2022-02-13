import styled from "styled-components";

export const WrapperCards = styled.div`
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

      button {
        color: var(--card-recipe);
      }
    }

    .card_right {
      background-size: cover;
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
