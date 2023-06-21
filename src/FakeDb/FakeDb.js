
const addToDb=(id)=>{
    let favoriteRecipes = [];
    const getFavoriteRecipes = localStorage.getItem('favorite-recipes')
    if (getFavoriteRecipes) {
        favoriteRecipes= JSON.parse(getFavoriteRecipes)
    }
    
    favoriteRecipes.push(id)

    localStorage.setItem('favorite-recipe', JSON.stringify(favoriteRecipes))
}

export {addToDb}