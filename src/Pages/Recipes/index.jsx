import AddRecipe from "../../Components/AddRecipe";

const Recipes = () => {
    const recipes = [
        {
          id: "1",
          name: "coxinha",
          ingredients: { name: "banana", quantity: "2" },
          description: "mixed everything ",
        },
    
        {
          id: "2",
          name: "lasanha",
          ingredients: { name: "sal", quantity: "2" },
          description: "mixed everything ",
        },
    
        {
          id: "3",
          name: "pastel",
          ingredients: { name: "banada", quantity: "2" },
          description: "mixed everything ",
        },
      ];

  return (
    <div className="container">
        <div className="title_container">
        <p>Please create the recipe you want to start to or build your own</p>
        <h1>Build your own recipe</h1>  
        </div>
        <AddRecipe meuArray={recipes} />
    
        </div>
  )
}

export default Recipes