import { useState } from 'react'

export default function Main() {
    const [ingredients, setIngdredients] = useState([])

    const ingList = ingredients.map((ing) => {
        return (
            <li>{ing}</li>
        )
    })

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
            <ul>
                {ingList}
            </ul>
        </main>
    )
}