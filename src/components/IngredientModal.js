import { FaChevronLeft } from "react-icons/fa";

const IngredientModal = ({ dish, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="ingredient-list-container">
                <button type="button" className="close-button" onClick={onClose}><FaChevronLeft /></button>
                <p className="ingredient-list">Ingredient list</p>
            </div>
            <div className="modal-name-image-container">
                <div>
                    <h2 className="modal-name">{dish.name}</h2>
                    <p className="modal-desc">{dish.description}</p>
                </div>
                <img src={dish.image} alt="dish-name" className="modal-image" />
            </div>
            <h4 className="ingredients-heading">Ingredients</h4>
            <ul className="ingredients-list">
            {dish.ingredients.map((ing, idx) => (
                <li key={idx} className="ingredients-names">{ing.name} <span>{ing.quantity}</span></li>
            ))}
            </ul>
        </div>
    </div>
);
  
export default IngredientModal;