import {useEffect, useState} from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "966d8e6d44e04307a769ed161eede217"
export default function Search({foodData, setFoodData}) {
    const [query,setQuery] = useState("pizza")

    //Syntax of a useEffect Hook
    useEffect(() => {
       async function fetchFood() {
            const res = await fetch(`${URL}?query${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data.results)
            setFoodData(data.results)
        }
        fetchFood()
    }, [query])
    return ( <div>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
    </div>
    )
}