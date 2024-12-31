import { useEffect, useRef, useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'
import { getRecipeFromChefClaude } from '../ai'

export default function Main() {
    const [ingredients, setIngdredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngdredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <h1>Add your ingredients below and let's get cooking!</h1>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <div className='centered-content-container'>
                {ingredients.length > 0 && 
                    <IngredientList
                        ref={recipeSection}
                        ingredients={ingredients} 
                        getRecipe={getRecipe}
                    />}
                {recipe && <ClaudeRecipe recipe={recipe}/>}
            </div>
        </main>
    )
}