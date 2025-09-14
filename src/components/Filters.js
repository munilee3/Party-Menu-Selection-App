import { CiSearch } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

const Filters = ({
  activeCategory, onCategoryChange,
  searchTerm, onSearchChange,
  vegOnly, onVegOnlyChange, totalSelectedDishes
}) => {
    const selectedDishesCount = (category) => {
        const selectedDishesCount = totalSelectedDishes.filter(eachCategory => eachCategory.mealType === category)
        return selectedDishesCount.length
    }
  return (
    <div className="filters">
      <div className="search-bar">
        <FaAngleLeft size={18} className="back-icon" />
        <input
          className="search-input"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
        />
        <CiSearch size={20} className="search-icon" />
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
          >
            {cat} {selectedDishesCount(cat)}
          </button>
        ))}
      </div>

      <div className="category-header">
        <h2>{activeCategory}s Selected ({selectedDishesCount(activeCategory)})</h2>
        <label className="veg-toggle">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={e => onVegOnlyChange(e.target.checked)}
          />
          Veg only
        </label>
      </div>

      <div className="section-header">
        <h3>North Indian</h3>
        <span className="collapse-icon">⌃</span>
      </div>
    </div>
  )
}

export default Filters;