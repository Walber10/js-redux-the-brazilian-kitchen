import styled from "styled-components";

export const WrapperAddRecipe = styled.section`
   input {
      padding: 20px;
    }
  margin: 0px 0px 80px 0px;
  button {
    margin-top: 64px;
    width: 260px;
    height: 52px;
    border: none;
    background: #e2bd5b;
    color: white;
    border-radius: 33px;
  }
  input {
    width: 260px;
    height: 52px;
    border: 1px solid #c5c6c6;
    border-radius: 26px;
  }

  .ingredient_container {
    max-width: 700px;
  }

  span {
    font-size: 30px;
    font-weight: 400;
  }
  .icons_container {
    i {
      font-size: 30px;
    }
  }

  .ingredient_row {
    margin-top: 36px;
    .items_added {
      border: 1px solid #c5c6c6;
      height: 219px;
      border-radius: 26px;
      overflow: auto;
      padding: 15px 0px 15px 0px;
      ul {
        list-style-type: none;
        li {
          display: flex;
        }
      }  
    }
    button {
      margin-top: 10px;
      width: 150px;
      height: 37px;
      border: none;
      background-color: var(--add-ingredient);
      border-radius: 33px;
    }

    .how_cook {
      textarea {
        padding: 20px;
      }
      textarea {
        border: 1px solid #c5c6c6;
        height: 219px;
        border-radius: 26px;
        width: 400px;
      }
    }
  }
`;
