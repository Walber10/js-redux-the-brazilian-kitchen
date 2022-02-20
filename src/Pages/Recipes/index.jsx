import AddRecipe from "../../Components/AddRecipe";

const Recipes = () => {
  

  return (
    <div className="container">
        <div className="title_container">
        <p>Please create the recipe you want to start to or build your own</p>
        <h1>Build your own recipe</h1>  
        </div>
        <AddRecipe  />
    
        </div>
  )
}

export default Recipes