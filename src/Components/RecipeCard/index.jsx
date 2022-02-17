import "../RecipeCard/recipeCard.css";
import RecipeImage from "../../Resources/recipe-icon-3.jpg";

const RecipeCard = ({ title, description }) => {
  return (
    <div className="col-3 cards_list">
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
              </div>
              <div className="col-6 recipe_image">
                <img src={RecipeImage} alt="icon recipe" />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
