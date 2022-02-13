import Cards from "../../Components/Cards";
import { WrapperHome } from "./home.style";

const Home = () => {
  return <WrapperHome>
    <div className="title_wrapper">
    <h1>
    Welcome to the Brazilian Kitchen
    </h1>
    <p>Cook the best Brazilian recipes</p>
    </div>
    <Cards />
  </WrapperHome>
};

export default Home;
