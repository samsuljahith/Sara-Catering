export interface StallItem {
  name: string;
  category: string;
  isVeg: boolean;
}

export const stallItems: StallItem[] = [
  // Drink Stalls
  { name: 'Buttermilk Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Filter Coffee Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Fresh Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Kumbakonam Coffee Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Mocktail Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Mosambi Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Neer Mor Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Orange Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Sugarcane Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Tea Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Tender Coconut Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Watermelon Juice Stall', category: 'Drink Stall', isVeg: true },
  { name: 'Welcome Drink Stall', category: 'Drink Stall', isVeg: true },

  // Snack Stalls
  { name: 'Burger Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Chaat Stall', category: 'Snack Stall', isVeg: true },
  { name: 'French Fries Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Masala Puri Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Momos Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Nachos Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Pani Puri Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Pav Bhaji Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Popcorn Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Samosa Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Sandwich Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Smiley Fries Stall', category: 'Snack Stall', isVeg: true },
  { name: 'Sweet Corn Stall', category: 'Snack Stall', isVeg: true },

  // Live Food Stalls
  { name: 'Appam Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Biryani Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Dosa Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Fried Rice Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Idiyappam Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Kothu Parotta Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Naan and Gravy Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Noodles Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Parotta Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Pasta Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Pizza Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Rava Dosa Stall', category: 'Live Food Stall', isVeg: true },
  { name: 'Soup Stall', category: 'Live Food Stall', isVeg: true },

  // Sweet Stalls
  { name: 'Candy Floss Stall', category: 'Sweet Stall', isVeg: true },
  { name: 'Cotton Candy Stall', category: 'Sweet Stall', isVeg: true },
  { name: 'Javvu Mittai Stall', category: 'Sweet Stall', isVeg: true },
  { name: 'Panju Mittai Stall', category: 'Sweet Stall', isVeg: true },
  { name: 'Payasam Counter', category: 'Sweet Stall', isVeg: true },

  // Dessert Stalls
  { name: 'Chocolate Fountain Stall', category: 'Dessert Stall', isVeg: true },
  { name: 'Falooda Stall', category: 'Dessert Stall', isVeg: true },
  { name: 'Fruit Salad Stall', category: 'Dessert Stall', isVeg: true },
  { name: 'Ice Cream Stall', category: 'Dessert Stall', isVeg: true },
  { name: 'Jigarthanda Stall', category: 'Dessert Stall', isVeg: true },

  // Traditional Snack Stalls
  { name: 'Appalam Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Banana Chips Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Beeda Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Kozhukattai Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Murukku Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Sundal Stall', category: 'Traditional Snack', isVeg: true },
  { name: 'Thenkuzhal Stall', category: 'Traditional Snack', isVeg: true },

  // Traditional Feast Stalls
  { name: 'Banana Leaf Meal Counter', category: 'Traditional Feast', isVeg: true },
  { name: 'Pickle Counter', category: 'Traditional Feast', isVeg: true },
  { name: 'Sadhya Style Counter', category: 'Traditional Feast', isVeg: true },

  // Fun Stalls
  { name: 'Balloon Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Bangle Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Caricature Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Gift Packing Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Mehendi Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Nail Art Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Photo Booth Stall', category: 'Fun Stall', isVeg: true },
  { name: 'Tattoo Stall', category: 'Fun Stall', isVeg: true },

  // Non-Veg Food Stalls
  { name: 'Chicken 65 Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Chicken Fry Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Chicken Kebab Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Chicken Lollipop Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Chicken Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Egg Bonda Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Egg Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Fish Fry Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Mutton Biryani Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Mutton Chukka Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Mutton Stall', category: 'Non-Veg Food Stall', isVeg: false },
  { name: 'Prawn Fry Stall', category: 'Non-Veg Food Stall', isVeg: false },
];
