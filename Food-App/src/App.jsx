import { useState } from 'react'
import Search from './components/Search.jsx'
import Foodlist from './components/Foodlist'


function App() {
  const [foodData, setFoodData] = useState([])
  

  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Foodlist foodData={foodData}/>
    </div>
  )
}

export default App
