import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'

export default function Main() {
    const [ingredients, setIngdredients] = useState([])

    const apiKey = import.meta.env.VITE_CLAUDE_API

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngdredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} />}
            <ClaudeRecipe />
        </main>
    )
}