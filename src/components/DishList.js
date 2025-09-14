import DishCard from "./DishCard";

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients, cardModel }) => {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.some(sel => sel.id === dish.id)}
          onViewIngredients={onViewIngredients}
          cardModel={cardModel}
        />
      ))}
    </div>
  )
}

export default DishList