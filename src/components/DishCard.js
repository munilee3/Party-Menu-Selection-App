const DishCard = (props) => {
    const { dish, onAddDish, onRemoveDish, isSelected, onViewIngredients, cardModel } = props
    const slicedText = dish.description.slice(0, 60)
    return (
    <div className="dish-card">
      <div className="dish-text">
        <div className="non-veg-icon-main-container">
            <h4>{dish.name}</h4>
            {dish.type === "VEG" ? <div className="veg-icon-container">
                <p className="veg-icon"></p>
            </div> : <div className="non-veg-icon-container">
                <p className="non-veg-icon"></p>
            </div>} 
        </div>
        <p className="desc" onClick={() => cardModel({...dish, isSelected: isSelected})}>{`${slicedText}...Read more`}</p>
        <button className="ingredient-link" onClick={() => onViewIngredients(dish)}><img src="https://ik.imagekit.io/issupg3so/fi_15315413.png?updatedAt=1757676110307" alt="ingredients-icon" className="ingredients-img" /> Ingredient</button>
      </div>
      <div className="food-card">
        <div className="food-image">
            <img src={dish.image} alt={dish.name} className="dish-image" />
        </div>
        <div className="dish-footer">
            {isSelected ? (
            <button className="remove-btn" onClick={() => onRemoveDish(dish)}>Remove</button>
            ) : (
            <button className="add-btn" onClick={() => onAddDish(dish)}>Add +</button>
            )}
        </div>
      </div>
    </div>
  );}
  
  export default DishCard;  