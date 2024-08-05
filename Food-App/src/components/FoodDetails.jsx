import { useEffect, useState } from "react"
import styles from './fooddetails.module.css'

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "966d8e6d44e04307a769ed161eede217"

    useEffect(() => {
      async function fetchFood() {
         const res = await fetch(`${URL}?apiKey=${API_KEY}`)
         const data = await res.json()
         console.log(data)
         setFood(data)
         setIsLoading(false)
        }
        fetchFood()
    }, [foodId])
    return <div>
        <div className={styles.recipeCard}>
            <h1 className={styles.recipeName}>{food.title}</h1>
            <img className={styles.recipeimage} src={food.image} alt="" />
            <div className={styles.recipeDetails}>
                <span>
                    <strong>🕕 Ready in {food.readyInMinutes}-Minutes</strong>
                </span>
                <span>👨‍👨‍👧‍👦<strong>Serves{food.servings}</strong></span>
                <span><strong>{food.vegetarian? "🥕 vegetarian": "🍖 non-vegetarian"}</strong></span>
                <span><strong>{food.vegan? "🐐vegan": ""}</strong></span>
            </div>
            <div>
                <span><strong>$ {food.pricePerServing / 100} per serving</strong></span>
            </div>
        
            <h2>Instructions</h2>
            <div className={styles.recipeInstruction}>
                <ol>
                    {isLoading? <p>Loading...</p>: food.analyzedInstructions[0].steps.map((step, id) => (<li key={id}>{step.step}</li>))}
                </ol>
            </div>
        </div>
    </div>
}