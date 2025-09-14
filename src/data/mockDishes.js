const dishes = [
   // ==== STARTERS ====
   {
     "id": 1,
     "name": "Paneer Tikka",
     "description": "Paneer Tikka is a popular Indian appetizer made from chunks of paneer (Indian cottage cheese) marinated in a flavorful blend of yogurt and spices, then grilled or roasted to perfection. The marinade typically includes ingredients like ginger-garlic paste, turmeric, chili powder, garam masala, lemon juice, and thick curd.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-stvhbpCIHk4_aVCxb0aekKPAJPLWM2FeA&s",
     "mealType": "STARTER",
     "type": "VEG",
     "ingredients": [
       { "name": "Paneer", "quantity": "250g" },
       { "name": "Yogurt", "quantity": "1/2 cup" },
       { "name": "Spices", "quantity": "2 tbsp" }
     ]
   },
   {
     "id": 2,
     "name": "Chicken Malai Tikka",
     "description": "Chicken Malai Tikka is a rich and creamy North Indian appetizer made with tender pieces of chicken marinated in a luxurious blend of fresh cream, cheese, yogurt, and mild spices. The marinade often includes ingredients like ginger-garlic paste, green chilies, white pepper, cardamom, and lemon juice, creating a subtle yet flavorful taste.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfnQjh1wy2j6UHuo-BUbG4TwLkfj-doJZvA&s",
     "mealType": "STARTER",
     "type": "NON-VEG",
     "ingredients": [
       { "name": "Chicken", "quantity": "300g" },
       { "name": "Cream", "quantity": "2 tbsp" },
       { "name": "Ginger Garlic Paste", "quantity": "1 tbsp" }
     ]
   },
   {
     "id": 3,
     "name": "Hara Bhara Kabab",
     "description": "Hara Bhara Kabab is a nutritious and flavorful vegetarian snack made from a mix of spinach, green peas, and boiled potatoes. The name “hara bhara” refers to its vibrant green color, which comes from the fresh spinach and herbs used in the recipe.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthPpI3gwFJyLrAn62Zhug8Fqnks3s85dnFg&s",
     "mealType": "STARTER",
     "type": "VEG",
     "ingredients": [
       { "name": "Spinach", "quantity": "1 cup" },
       { "name": "Green Peas", "quantity": "1/2 cup" },
       { "name": "Potato", "quantity": "2 medium" }
     ]
   },
   {
     "id": 4,
     "name": "Fish Amritsari",
     "description": "Fish Amritsari is a popular Punjabi delicacy known for its crispy texture and bold flavors. Originating from the city of Amritsar, this dish features boneless fish pieces marinated in a mixture of gram flour (besan), ginger-garlic paste, lemon juice, carom seeds (ajwain), red chili powder, turmeric, and other aromatic spices.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxf8EkJmgIjUM3NNsP8wcH_XYjQosxrcxEA&s",
     "mealType": "STARTER",
     "type": "NON-VEG",
     "ingredients": [
       { "name": "Fish Fillets", "quantity": "250g" },
       { "name": "Besan", "quantity": "1/2 cup" },
       { "name": "Lemon Juice", "quantity": "1 tbsp" }
     ]
   },
   {
     "id": 5,
     "name": "Veg Spring Rolls",
     "description": "Veg Spring Rolls are a popular Indo-Chinese snack known for their crisp outer layer and flavorful vegetable filling. They are made by wrapping a thin sheet of dough around a mixture of finely shredded vegetables like cabbage, carrots, bell peppers, and spring onions sautéed with garlic, soy sauce, and black pepper.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2pJwtPxphXO76zI0GzNL0HEQLAiHbMDlPw&s",
     "mealType": "STARTER",
     "type": "VEG",
     "ingredients": [
       { "name": "Cabbage", "quantity": "1 cup" },
       { "name": "Carrot", "quantity": "1/2 cup" },
       { "name": "Spring Roll Sheets", "quantity": "10" }
     ]
   },
 
   {
     "id": 6,
     "name": "Kadhai Paneer",
     "description": "Kadhai Paneer is a popular North Indian dish bursting with bold and vibrant flavors. It is prepared by cooking paneer cubes with onions, tomatoes, and bell peppers in a traditional wok-like pan called a kadhai.",
     "image": "https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3.jpg",
     "mealType": "MAIN COURSE",
     "type": "VEG",
     "ingredients": [
       { "name": "Paneer", "quantity": "200g" },
       { "name": "Onion", "quantity": "2 large" },
       { "name": "Capsicum", "quantity": "1 large" },
       { "name": "Tomato Puree", "quantity": "1 cup" }
     ]
   },
   {
     "id": 7,
     "name": "Butter Chicken",
     "description": "Butter Chicken, also known as Murgh Makhani, is one of the most beloved dishes from North Indian cuisine. Tender chicken pieces are first marinated in yogurt and spices, then grilled or pan-cooked to perfection. ",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2jh7DvoLtDyDF6cigDHFrSMs5zMpaXRelA&s",
     "mealType": "MAIN COURSE",
     "type": "NON-VEG",
     "ingredients": [
       { "name": "Chicken", "quantity": "300g" },
       { "name": "Butter", "quantity": "3 tbsp" },
       { "name": "Tomato Puree", "quantity": "1 cup" }
     ]
   },
   {
     "id": 8,
     "name": "Palak Paneer",
     "description": "Palak Paneer is a classic North Indian vegetarian dish combining the goodness of spinach with soft cubes of paneer. Fresh spinach leaves are blanched, pureed, and cooked with onions, tomatoes, ginger, garlic, and aromatic spices like cumin and garam masala.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8enuFy1g1v5YJVTZ7ld4coiJMs2giWgq-g&s",
     "mealType": "MAIN COURSE",
     "type": "VEG",
     "ingredients": [
       { "name": "Spinach", "quantity": "2 cups" },
       { "name": "Paneer", "quantity": "200g" },
       { "name": "Garlic", "quantity": "1 tsp" }
     ]
   },
   {
     "id": 9,
     "name": "Mutton Rogan Josh",
     "description": "Mutton Rogan Josh is a signature dish from Kashmiri cuisine, known for its deep red color and aromatic flavors. Tender pieces of mutton are slow-cooked in a rich gravy made with yogurt, onions, garlic, and a blend of spices like fennel, dry ginger, and Kashmiri red chili powder.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HrNzcKPGXLXpAc4nUoEQxq8L9F55mUVwoQ&s",
     "mealType": "MAIN COURSE",
     "type": "NON-VEG",
     "ingredients": [
       { "name": "Mutton", "quantity": "300g" },
       { "name": "Onions", "quantity": "2 large" },
       { "name": "Yogurt", "quantity": "1/2 cup" }
     ]
   },
   {
     "id": 10,
     "name": "Veg Biryani",
     "description": "Veg Biryani is a fragrant and flavorful rice dish made with aromatic basmati rice, assorted vegetables, and a blend of traditional Indian spices. The vegetables like carrots, beans, peas, and potatoes are sautéed with onions, tomatoes, ginger-garlic paste, and spices such as turmeric, cumin, coriander, and garam masala.",
     "image": "https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg",
     "mealType": "MAIN COURSE",
     "type": "VEG",
     "ingredients": [
       { "name": "Basmati Rice", "quantity": "2 cups" },
       { "name": "Mixed Vegetables", "quantity": "1 cup" },
       { "name": "Spices", "quantity": "2 tbsp" }
     ]
   },
 
   {
     "id": 11,
     "name": "Gulab Jamun",
     "description": "Gulab Jamun is a classic Indian dessert made from soft, melt-in-the-mouth balls crafted with khoya (milk solids) or milk powder and a hint of cardamom. These dough balls are gently deep-fried until golden brown, then soaked in warm sugar syrup flavored with rose water, saffron, or cardamom.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHpjmf-6lWzOzxaL_kZBfJtknukk1ZnnK_g&s",
     "mealType": "DESSERT",
     "type": "VEG",
     "ingredients": [
       { "name": "Khoya", "quantity": "1 cup" },
       { "name": "Sugar", "quantity": "1 cup" },
       { "name": "Cardamom", "quantity": "1/2 tsp" }
     ]
   },
   {
     "id": 12,
     "name": "Rasmalai",
     "description": "Rasmalai is a luxurious Indian dessert made from soft, spongy paneer patties (called rasgullas) soaked in thickened, sweetened milk flavored with cardamom and saffron. The milk is gently simmered until it reduces to a creamy consistency, then sweetened and infused with aromatic spices.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZK2MX8ncglcBaXWvPQXVsZ-k45ayEzdqYQ&s",
     "mealType": "DESSERT",
     "type": "VEG",
     "ingredients": [
       { "name": "Chenna", "quantity": "1 cup" },
       { "name": "Milk", "quantity": "2 cups" },
       { "name": "Sugar", "quantity": "1/2 cup" }
     ]
   },
   {
     "id": 13,
     "name": "Chocolate Brownie",
     "description": "Chocolate Brownie is a rich, fudgy dessert loved for its deep chocolate flavor and dense, moist texture. Made from a blend of high-quality cocoa or melted chocolate, butter, sugar, eggs, and flour, it achieves a perfect balance of sweetness and chocolate intensity.",
     "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Gooey-Brownies-5627e49.jpg",
     "mealType": "DESSERT",
     "type": "VEG",
     "ingredients": [
       { "name": "Cocoa Powder", "quantity": "1/2 cup" },
       { "name": "Flour", "quantity": "1 cup" },
       { "name": "Butter", "quantity": "1/2 cup" }
     ]
   },
   {
     "id": 14,
     "name": "Phirni",
     "description": "Phirni is a traditional Indian dessert made from ground rice, milk, and sugar, flavored delicately with cardamom and saffron. The rice is soaked, ground into a fine paste, and slowly cooked in milk until it thickens into a creamy, smooth consistency. Sweetness is added, and the dessert is often enriched with rose water or kewra essence for a fragrant aroma.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBH0SPFzSO0Ew1TkP-kqq0jTH0zaZg3serA&s",
     "mealType": "DESSERT",
     "type": "VEG",
     "ingredients": [
       { "name": "Rice", "quantity": "1/4 cup" },
       { "name": "Milk", "quantity": "2 cups" },
       { "name": "Sugar", "quantity": "1/2 cup" }
     ]
   },
   {
     "id": 15,
     "name": "Fruit Salad with Cream",
     "description": "Fruit Salad with Cream is a refreshing and colorful dessert made by combining a variety of fresh, juicy fruits such as apples, bananas, grapes, papaya, and pomegranate. The fruits are cut into bite-sized pieces and tossed with a rich, lightly sweetened cream, which may be whipped or mixed with condensed milk for extra indulgence.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4MbkEUZaDsjf6qfN3MMgwJfnCOU12NoXPQ&s",
     "mealType": "DESSERT",
     "type": "VEG",
     "ingredients": [
       { "name": "Mixed Fruits", "quantity": "2 cups" },
       { "name": "Cream", "quantity": "1/2 cup" },
       { "name": "Sugar", "quantity": "2 tbsp" }
     ]
   },
 
   {
     "id": 16,
     "name": "Tandoori Roti",
     "description": "Tandoori Roti is a traditional Indian flatbread, celebrated for its smoky flavor and crisp texture. Made from whole wheat flour, water, and a pinch of salt, the dough is kneaded and allowed to rest before being rolled into round discs.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qNCJ-Il_9x8K23XO6jmeQvlybghT_mTiXw&s",
     "mealType": "SIDES",
     "type": "VEG",
     "ingredients": [
       { "name": "Whole Wheat Flour", "quantity": "2 cups" },
       { "name": "Salt", "quantity": "1 tsp" },
       { "name": "Water", "quantity": "as needed" }
     ]
   },
   {
     "id": 17,
     "name": "Butter Naan",
     "description": "Butter Naan is a soft and fluffy Indian flatbread, enriched with butter for a rich, indulgent flavor. Made from refined wheat flour (maida), yeast or yogurt, and a pinch of sugar and salt, the dough is kneaded until smooth and allowed to rise.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0yBjOvU4BwUI5r6tJhYU5CQlAYOrqHphIg&s",
     "mealType": "SIDES",
     "type": "VEG",
     "ingredients": [
       { "name": "Maida", "quantity": "2 cups" },
       { "name": "Butter", "quantity": "2 tbsp" },
       { "name": "Yogurt", "quantity": "2 tbsp" }
     ]
   },
   {
     "id": 18,
     "name": "Jeera Rice",
     "description": "Jeera Rice is a fragrant and flavorful Indian rice dish, known for its simplicity and aromatic cumin (jeera) flavor. Made with long-grain basmati rice, it is first rinsed and soaked to ensure fluffy grains. The rice is then sautéed lightly in ghee or oil with cumin seeds until aromatic, and cooked with water, salt, and sometimes whole spices like bay leaf or cloves.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2ROIcW5UYGB4_7L6jYGIgcmuQRgFNUkmxw&s",
     "mealType": "SIDES",
     "type": "VEG",
     "ingredients": [
       { "name": "Basmati Rice", "quantity": "1 cup" },
       { "name": "Cumin Seeds", "quantity": "1 tsp" },
       { "name": "Ghee", "quantity": "1 tbsp" }
     ]
   },
   {
     "id": 19,
     "name": "Boondi Raita",
     "description": "Boondi Raita is a popular Indian side dish made by combining crisp, tiny gram flour (besan) fried droplets called boondi with creamy yogurt. The yogurt is whisked until smooth and lightly seasoned with salt, roasted cumin powder, black salt, and sometimes chaat masala or red chili powder for added flavor.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WkSVAD7QPa2jBv5Ryl51YckXuLW4Yyo2CA&s",
     "mealType": "SIDES",
     "type": "VEG",
     "ingredients": [
       { "name": "Yogurt", "quantity": "1 cup" },
       { "name": "Boondi", "quantity": "1/2 cup" },
       { "name": "Spices", "quantity": "1 tsp" }
     ]
   },
   {
     "id": 20,
     "name": "Green Salad",
     "description": "Green Salad is a fresh and healthy dish made primarily from crisp, raw vegetables and leafy greens. Common ingredients include lettuce, spinach, cucumber, celery, green peppers, and herbs like parsley or coriander. Additional elements such as avocado, sprouts, or green apples can add flavor and texture.",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQQmULxqvdZpOgmgNGjt9vTxyOYwosR4z6g&s",
     "mealType": "SIDES",
     "type": "VEG",
     "ingredients": [
       { "name": "Cucumber", "quantity": "1" },
       { "name": "Tomato", "quantity": "1" },
       { "name": "Lettuce", "quantity": "4 leaves" }
     ]
   }
 ];
 
 export default dishes