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
            {ingredients.length > 0 && <section>
                <h2>List of ingredients: </h2>
                <ul className='ingredients-list'>{ingList}</ul>
                {ingredients.length > 3 && <div className='get-recipe-container'>
                    <div>
                        <h3>Time to cook?</h3>
                        <p>Generate a recipe based on your list of ingredients</p>
                    </div>
                    <button>Get recipe</button>
                </div>}
            </section>}
        </main>
    )
}