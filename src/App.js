import { useState } from 'react'
import dishes from './data/mockDishes'
import Filters from './components/Filters'
import DishList from './components/DishList'
import IngredientModal from './components/IngredientModal'
import { FaChevronRight } from "react-icons/fa";

import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER")
  const [searchTerm, setSearchTerm] = useState("")
  const [vegOnly, setVegOnly] = useState(false)
  const [selectedDishes, setSelectedDishes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentDish, setCurrentDish] = useState(null)
  const [cardModelDetails, setCardModelDetails] = useState({});

  const filteredDishes = dishes.filter(
    dish =>
      dish.mealType === selectedCategory &&
      (!vegOnly || dish.type === "VEG") &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddDish = dish => {
    if (!selectedDishes.some(d => d.id === dish.id)) setSelectedDishes([...selectedDishes, dish]);
  }

  const handleRemoveDish = dish => {
    setSelectedDishes(selectedDishes.filter(eachDish => eachDish.id !== dish.id))
  }

  const handleViewIngredients = dish => {
    setCurrentDish(dish)
    setIsModalOpen(true)
  }

  const handleModel = (dish) => {
    setCardModelDetails(dish);
  }

  return (
    <div className="app">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        totalSelectedDishes={selectedDishes}
      />

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
        cardModel={handleModel}
      />

      <div className="bottom-bar">
        <div className='total-dish-container'>
          <p className='total-dish'>Total Dish Selected {selectedDishes.length}</p>
          <FaChevronRight />
        </div>
        <button className="continue-btn">Continue</button>
      </div>

      {cardModelDetails?.id && (
        <div className="overlay" onClick={() => setCardModelDetails({})}>
          <div
            className="ingredient-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={cardModelDetails.image} alt="cart image" className='card-image'/>
            <div className='name-add-button-container'>
              <div className="non-veg-icon-main-container">
                <h4>{cardModelDetails.name}</h4>
                {cardModelDetails.type === "VEG" ? <div className="veg-icon-container">
                    <p className="veg-icon"></p>
                </div> : <div className="non-veg-icon-container">
                    <p className="non-veg-icon"></p>
                </div>} 
              </div>
              <div>
                {cardModelDetails.isSelected ? (
                <button className="remove-btn" onClick={() => handleRemoveDish(cardModelDetails)}>Remove</button>
                ) : (
                <button className="add-btn" onClick={() => handleAddDish(cardModelDetails)}>Add +</button>
                )}
              </div>
            </div>
            <p><strong>North Indian </strong>{cardModelDetails.description}</p>
            <button className="ingredient-link"><img src="https://ik.imagekit.io/issupg3so/fi_15315413.png?updatedAt=1757676110307" alt="ingredients-icon" className="ingredients-img" /> Ingredient</button>
          </div>
        </div>
      )}


      {isModalOpen && (
        <IngredientModal
          dish={currentDish}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App