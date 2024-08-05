import { useState } from 'react'
import Search from './components/Search.jsx'
import Foodlist from './components/Foodlist'
import Nav from './components/Nav.jsx'
import './App.css'
import Container from './components/Container.jsx'
import InnerContainer from './components/InnerContainer.jsx'
import FoodDetails from './components/FoodDetails.jsx'
function App() {
  const [foodId,setFoodId] = useState("644387")
  const [foodData, setFoodData] = useState([])
  

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
