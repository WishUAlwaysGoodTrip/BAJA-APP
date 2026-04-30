export interface Cocktail {
  id: string;
  name: string;
  category: string;
  ingredients: string;
  measurements: string;
  rim?: string;
  method?: string;
  glassware?: string;
  garnish?: string;
  tasteProfile?: string;
  availability: string;
}

export const cocktails: Cocktail[] = [
  {
    id: "classic-margarita",
    name: "Classic Margarita",
    category: "Classic Margarita",
    ingredients: "Cazadores Blanco, Triple Sec, Lime Juice",
    measurements: "40ml Cazadores Blanco; 30ml Triple Sec; 30ml Lime Juice",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Tart, citrusy, sour-leaning, strong lime flavour with light sweetness from triple sec, clean and sharp",
    availability: "3 shops"
  },
  {
    id: "tommys-margarita",
    name: "Tommy's Margarita",
    category: "Modern Margarita",
    ingredients: "El Jimador Blanco, Triple Sec, Lime Juice, Agave",
    measurements: "40ml El Jimador Blanco; 30ml Triple Sec; 30ml Lime Juice; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweeter, smoother, agave-forward, natural sweetness softens the lime into a rounder flavour",
    availability: "3 shops"
  },
  {
    id: "jalapeno-margarita",
    name: "Jalapeno Margarita",
    category: "Spicy Margarita",
    ingredients: "El Jimador Reposado, Triple Sec, Lime Juice, Spicy Sauce",
    measurements: "40ml El Jimador Reposado; 30ml Triple Sec; 30ml Lime Juice; Spicy Sauce",
    rim: "Tajin rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Fresh lime with noticeable jalapeno heat, bright, spicy, and zesty",
    availability: "3 shops"
  },
  {
    id: "mezcal-margarita",
    name: "Mezcal Margarita",
    category: "Mezcal Margarita",
    ingredients: "Monte Alban, Cointreau, Lime Juice, Agave",
    measurements: "30ml Monte Alban; 30ml Cointreau; 30ml Lime Juice; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Smoky, citrusy, sweetened with agave, bold but smooth",
    availability: "3 shops"
  },
  {
    id: "la-patrona",
    name: "La Patrona",
    category: "Premium Margarita",
    ingredients: "Patron Silver, Cointreau, Lime Juice, Agave",
    measurements: "40ml Patron Silver; 30ml Cointreau; 30ml Lime Juice; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Clean, smooth, balanced with refined tequila and gentle sweetness",
    availability: "3 shops"
  },
  {
    id: "pineapple-margarita",
    name: "Pineapple Margarita",
    category: "Fruit Margarita",
    ingredients: "El Jimador Reposado, Triple Sec, Lime Juice, Pineapple Juice, Agave",
    measurements: "40ml El Jimador Reposado; 30ml Triple Sec; 30ml Lime Juice; Pineapple Juice requires confirmation; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Tropical, sweet-tart, juicy pineapple with lime",
    availability: "3 shops"
  },
  {
    id: "passion-fruit-margarita",
    name: "Passion Fruit Margarita",
    category: "Fruit Margarita",
    ingredients: "El Jimador Reposado, De Kuyper Passion Fruit, Lime Juice, Agave",
    measurements: "40ml El Jimador Reposado; 30ml De Kuyper Passion Fruit; 30ml Lime Juice; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Tangy, vibrant, crisp, more tart than sweet",
    availability: "3 shops"
  },
  {
    id: "strawberry-margarita",
    name: "Strawberry Margarita",
    category: "Frozen Fruit Margarita",
    ingredients: "El Jimador Reposado, Lime Juice, De Kuyper Strawberry, Frozen Strawberries, Agave",
    measurements: "40ml El Jimador Reposado; 30ml Lime Juice; 30ml De Kuyper Strawberry; 4-5 Frozen Strawberries; Agave",
    rim: "Salt rim",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweet, refreshing, classic strawberry flavour",
    availability: "3 shops"
  },
  {
    id: "mango-margarita",
    name: "Mango Margarita",
    category: "Frozen Fruit Margarita",
    ingredients: "El Jimador Reposado, Lime Juice, De Kuyper Mango, Frozen Mango, Agave",
    measurements: "40ml El Jimador Reposado; 30ml Lime Juice; 30ml De Kuyper Mango; 4-6 Frozen Mango; Agave",
    rim: "Salt rim",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweet, lush, ripe mango flavour with gentle citrus",
    availability: "3 shops"
  },
  {
    id: "raspberry-margarita",
    name: "Raspberry Margarita",
    category: "Frozen Fruit Margarita",
    ingredients: "Cazadores Blanco, Lime Juice, De Kuyper Triple Sec, Frozen Raspberries, Agave",
    measurements: "Base spirit measurement requires confirmation; Lime juice measurement requires confirmation; De Kuyper Triple Sec measurement requires confirmation; 3-4 Frozen Raspberries; Agave",
    rim: "Salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "lychee-caprioska",
    name: "Lychee Caprioska",
    category: "Fruity Vodka Cocktail",
    ingredients: "Vodka, Lychee, Cranberry Juice, Lychee Syrup, Syrup, Lime",
    measurements: "30ml Vodka; Lychee measurement requires confirmation; 30ml Cranberry Juice; 10ml Lychee Syrup; 15ml Syrup; 15ml Lime",
    rim: "",
    method: "",
    glassware: "",
    garnish: "Lychee",
    tasteProfile: "Sweet lychee balanced with cranberry and lime",
    availability: "3 shops"
  },
  {
    id: "pina-colada",
    name: "Pina Colada",
    category: "Frozen Tropical Cream Cocktail",
    ingredients: "Malibu, Pineapple Juice, Lime, Frozen Coconut Cream, Agave",
    measurements: "60ml Malibu; 45ml Pineapple Juice; 15ml Lime; 2 cubes Frozen Coconut Cream; Agave",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweet, creamy, coconut-rich, dessert-like with pineapple acidity",
    availability: "3 shops"
  },
  {
    id: "mojito",
    name: "Mojito",
    category: "Mint Highball",
    ingredients: "Bacardi, Lime Juice, Syrup, Mint Leaves, Soda, Lemonade",
    measurements: "45ml Bacardi; 30ml Lime Juice; 30ml Syrup; muddled mint leaves; top with half soda + half lemonade",
    method: "Muddle mint leaves; fill glass with ice; top with half soda and half lemonade",
    glassware: "",
    garnish: "Mint leaves",
    tasteProfile: "Minty, crisp, sparkling, lightly sweet with fresh lime",
    availability: "3 shops"
  },
  {
    id: "strawberry-daiquiri",
    name: "Strawberry Daiquiri",
    category: "Frozen Daiquiri",
    ingredients: "Captain Morgan, De Kuyper Strawberry, Pineapple Juice, Lime Juice, Frozen Strawberry, Agave",
    measurements: "40ml Captain Morgan; 30ml De Kuyper Strawberry; 30ml Pineapple Juice; 15ml Lime Juice; 3-4 Frozen Strawberry; Agave",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "paloma",
    name: "Paloma",
    category: "Paloma",
    ingredients: "El Jimador Blanco, Grapefruit Cordial, Lime Juice, Salt, Agrum",
    measurements: "40ml El Jimador Blanco; 20ml Grapefruit Cordial; 20ml Lime Juice; pinch salt; top up with Agrum",
    rim: "Half salt rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Refreshing, grapefruit-driven, lightly bitter with soda fizz",
    availability: "3 shops"
  },
  {
    id: "brisa",
    name: "Brisa",
    category: "Floral Spritz",
    ingredients: "Hibiscus, Orange Juice, Prosecco",
    measurements: "20ml Hibiscus; 20ml Orange Juice; top up with Prosecco",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Light, floral, bubbly with hibiscus and bright orange notes",
    availability: "3 shops"
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    category: "Spritz",
    ingredients: "Limoncello, Prosecco, Soda",
    measurements: "60ml Limoncello; 60ml Prosecco; 60ml Soda",
    method: "",
    glassware: "",
    garnish: "Dry lemon garnish",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    category: "Spritz",
    ingredients: "Aperol, Prosecco, Soda",
    measurements: "60ml Aperol; 60ml Prosecco; 60ml Soda",
    method: "",
    glassware: "",
    garnish: "Orange garnish",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "tequila-sour",
    name: "Tequila Sour",
    category: "Sour",
    ingredients: "El Jimador Anejo, Lime Juice, Syrup, Foamer, Grenadine",
    measurements: "40ml El Jimador Anejo; 30ml Lime Juice; 15ml Syrup; 2-3 drops foamer; 5ml Grenadine",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "mexican-punch",
    name: "Mexican Punch",
    category: "Punch",
    ingredients: "El Jimador Blanco, Liquor 43, Pineapple Juice, Passion Fruit Cube, Agave, Bitters",
    measurements: "40ml El Jimador Blanco; 30ml Liquor 43; 30ml Pineapple Juice; 2 passion fruit cubes; dash agave; 2-3 dashes bitters",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "",
    availability: "3 shops"
  },
  {
    id: "michelada",
    name: "Michelada",
    category: "Beer Cocktail",
    ingredients: "Clamato, Lime, Maggi, Worcestershire Sauce, Tabasco, Tajin",
    measurements: "60ml Clamato; 15ml Lime; 2-3 drops Maggi; 2-3 drops Worcestershire Sauce; 2-3 drops Tabasco",
    rim: "Tajin rim",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Savory, spicy, tangy, lime + spice + beer",
    availability: "3 shops"
  },
  {
    id: "elderflower",
    name: "Elderflower",
    category: "Spritz / Highball",
    ingredients: "Elderflower Syrup, Lime Juice, Strawberry, Soda",
    measurements: "30ml Elderflower Syrup; 20ml Lime Juice; strawberry; soda top up",
    method: "Build with crushed ice",
    glassware: "",
    garnish: "",
    tasteProfile: "",
    availability: "3 shops"
  },
  // Non-Alcoholic
  {
    id: "virgin-pina-colada",
    name: "Virgin Pina Colada",
    category: "Non-Alcoholic Frozen Tropical Drink",
    ingredients: "Pineapple Juice, Lime Juice, Coconut Cream, Agave",
    measurements: "90ml Pineapple Juice; 15ml Lime Juice; 3 cubes Coconut Cream; Agave",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweet, creamy, coconut-rich with pineapple acidity",
    availability: "3 shops"
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    category: "Non-Alcoholic Mint Highball",
    ingredients: "Mint Leaves, Lime, Syrup, Lemonade, Soda Water",
    measurements: "Muddled mint leaves; 30ml Lime; 30ml Syrup; top with more lemonade less soda water",
    method: "Muddle mint leaves; fill glass with ice; top with lemonade and soda water",
    glassware: "",
    garnish: "",
    tasteProfile: "Minty, crisp, sparkling, lightly sweet with fresh lime",
    availability: "3 shops"
  },
  {
    id: "virgin-strawberry-daiquiri",
    name: "Virgin Strawberry Daiquiri",
    category: "Non-Alcoholic Frozen Fruit Drink",
    ingredients: "Pineapple Juice, Lime Juice, Strawberries, Agave",
    measurements: "60ml Pineapple Juice; 15ml Lime Juice; 4-5 Strawberries; Agave",
    method: "Blend with ice",
    glassware: "",
    garnish: "",
    tasteProfile: "Sweet, refreshing, strawberry flavour",
    availability: "3 shops"
  },
  // Sangria
  {
    id: "sparkling-sangria-glass",
    name: "Sparkling Sangria Glass",
    category: "Sparkling Sangria",
    ingredients: "Pineapple Juice, Syrup, Limoncello, De Kuyper Strawberry, Lime, Frozen Mixed Berries, Ice, Markview Brut Cuvee",
    measurements: "15ml Pineapple Juice; 15ml Syrup; 15ml Limoncello; 10ml De Kuyper Strawberry; 10ml Lime; frozen mixed berries; few cubes of ice; fill with Markview Brut Cuvee",
    method: "",
    glassware: "",
    garnish: "",
    tasteProfile: "Bubbly, berry-forward, lightly sweet, refreshing and bright",
    availability: "3 shops"
  },
  {
    id: "sparkling-sangria-jug",
    name: "Sparkling Sangria Jug",
    category: "Sparkling Sangria Jug",
    ingredients: "Pineapple Juice, Syrup, Limoncello, De Kuyper Strawberry, Lime Juice, Frozen Berries, Markview Brut Cuvee",
    measurements: "120ml Pineapple Juice; 60ml Syrup; 60ml Limoncello; 60ml De Kuyper Strawberry; 30ml Lime Juice; frozen berries; 1.5 scoops ice; fill with Markview Brut Cuvee",
    method: "",
    glassware: "Jug",
    garnish: "",
    tasteProfile: "Bubbly, berry-forward, lightly sweet, refreshing and bright",
    availability: "3 shops"
  }
];

export const cocktailCategories = [
  "Classic Margarita",
  "Modern Margarita",
  "Spicy Margarita",
  "Mezcal Margarita",
  "Premium Margarita",
  "Fruit Margarita",
  "Frozen Fruit Margarita",
  "Fruity Vodka Cocktail",
  "Frozen Tropical Cream Cocktail",
  "Mint Highball",
  "Frozen Daiquiri",
  "Paloma",
  "Floral Spritz",
  "Spritz",
  "Sour",
  "Punch",
  "Beer Cocktail",
  "Spritz / Highball",
  "Non-Alcoholic Frozen Tropical Drink",
  "Non-Alcoholic Mint Highball",
  "Non-Alcoholic Frozen Fruit Drink",
  "Sparkling Sangria",
  "Sparkling Sangria Jug"
];