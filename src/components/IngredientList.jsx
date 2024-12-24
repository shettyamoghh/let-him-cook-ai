import React from 'react'

export default function IngredientList({ingredients}) {
    const ingList = ingredients.map((ing) => {
        return (
            <li>{ing}</li>
        )
    })
    return (
        <section>
            <h2>List of ingredients: </h2>
            <ul className='ingredients-list'>{ingList}</ul>
            {ingredients.length > 3 && <div className='get-recipe-container'>
                <div>
                    <h3>Time to cook?</h3>
                    <p>Generate a recipe based on your list of ingredients</p>
                </div>
                <button>Get recipe</button>
            </div>}
        </section>
    )
}
