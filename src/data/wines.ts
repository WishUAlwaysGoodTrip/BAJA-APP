export interface Wine {
  id: string;
  name: string;
  type: string;
  varietal: string;
  country: string;
  region: string;
  body: string;
  tannin: string;
  acidity: string;
  sweetness: string;
  smell: string;
  taste: string;
  foodPairing: string;
  staffNotes: string;
  availability: string;
}

export const wines: Wine[] = [
  // White Wine
  {
    id: "atlas-watervale-riesling",
    name: "Atlas Watervale Riesling",
    type: "White Wine",
    varietal: "Riesling",
    country: "Australia",
    region: "Clare Valley, South Australia",
    body: "Light",
    tannin: "N/A",
    acidity: "Very High",
    sweetness: "Dry",
    smell: "Lime",
    taste: "Zesty",
    foodPairing: "Seafood, salads, spicy dishes",
    staffNotes: "Crisp and citrus-driven, great with seafood",
    availability: "3 shops"
  },
  {
    id: "nambucca-sauvignon-blanc",
    name: "Nambucca Sauvignon Blanc",
    type: "White Wine",
    varietal: "Sauvignon Blanc",
    country: "New Zealand",
    region: "Marlborough, New Zealand",
    body: "Light",
    tannin: "N/A",
    acidity: "High",
    sweetness: "Dry",
    smell: "Gooseberry",
    taste: "Crisp",
    foodPairing: "Seafood, salads, goat cheese",
    staffNotes: "Crisp and citrus-driven, great with seafood",
    availability: "3 shops"
  },
  {
    id: "aranleon-blanco",
    name: "Aranleon Blanco",
    type: "White Wine",
    varietal: "Spanish blend",
    country: "Spain",
    region: "Valencia, Spain",
    body: "Medium-Light",
    tannin: "N/A",
    acidity: "High",
    sweetness: "Dry",
    smell: "Citrus",
    taste: "Smooth",
    foodPairing: "Seafood, rice dishes, light meats",
    staffNotes: "Smooth white wine, versatile pairing",
    availability: "3 shops"
  },
  {
    id: "nova-vita-gruner-veltliner",
    name: "Nova Vita Gruner Veltliner",
    type: "White Wine",
    varietal: "Gruner Veltliner",
    country: "Australia",
    region: "Adelaide Hills, South Australia",
    body: "Medium",
    tannin: "N/A",
    acidity: "Medium-High",
    sweetness: "Dry",
    smell: "Pear",
    taste: "Spicy",
    foodPairing: "Seafood, pork, Asian cuisine",
    staffNotes: "Spicy white wine, great with Asian dishes",
    availability: "3 shops"
  },
  {
    id: "tohu-pinot-gris",
    name: "Tohu Pinot Gris",
    type: "White Wine",
    varietal: "Pinot Gris",
    country: "New Zealand",
    region: "Marlborough, New Zealand",
    body: "Medium",
    tannin: "N/A",
    acidity: "Medium",
    sweetness: "Dry",
    smell: "Pear",
    taste: "Soft",
    foodPairing: "Pork, chicken, soft cheese",
    staffNotes: "Soft and approachable, crowd pleaser",
    availability: "3 shops"
  },
  {
    id: "the-den-chenin-blanc",
    name: "The Den Chenin Blanc",
    type: "White Wine",
    varietal: "Chenin Blanc",
    country: "South Africa",
    region: "South Africa",
    body: "Medium-Full",
    tannin: "N/A",
    acidity: "Medium",
    sweetness: "Dry",
    smell: "Honey",
    taste: "Juicy",
    foodPairing: "Spicy dishes, pork, fruit desserts",
    staffNotes: "Juicy and fruit-forward, great with spicy food",
    availability: "3 shops"
  },
  {
    id: "flame-tree-embers-chardonnay",
    name: "Flame Tree Embers Chardonnay",
    type: "White Wine",
    varietal: "Chardonnay",
    country: "Australia",
    region: "Margaret River, Western Australia",
    body: "Full",
    tannin: "N/A",
    acidity: "Medium-Low",
    sweetness: "Dry",
    smell: "Peach",
    taste: "Creamy",
    foodPairing: "Rich seafood, chicken, creamy pasta",
    staffNotes: "Creamy and full-bodied, great with rich dishes",
    availability: "3 shops"
  },
  // Rose
  {
    id: "atlas-rose",
    name: "Atlas Rose",
    type: "Rose",
    varietal: "Rose blend",
    country: "Australia",
    region: "Clare Valley, South Australia",
    body: "Light",
    tannin: "N/A",
    acidity: "High",
    sweetness: "Dry",
    smell: "Strawberry",
    taste: "Dry",
    foodPairing: "Salads, light meats, seafood",
    staffNotes: "Dry and refreshing, perfect for summer",
    availability: "3 shops"
  },
  {
    id: "andeluna-malbec-rose",
    name: "Andeluna Malbec Rose",
    type: "Rose",
    varietal: "Malbec",
    country: "Argentina",
    region: "Mendoza, Argentina",
    body: "Medium-Full",
    tannin: "Low",
    acidity: "Medium",
    sweetness: "Dry",
    smell: "Berry",
    taste: "Juicy",
    foodPairing: "BBQ, grilled meats, spicy dishes",
    staffNotes: "Juicy rose with great body, pairs well with BBQ",
    availability: "3 shops"
  },
  // Red Wine
  {
    id: "ingram-rd-pinot-noir",
    name: "Ingram Rd Pinot Noir",
    type: "Red Wine",
    varietal: "Pinot Noir",
    country: "Australia",
    region: "Yarra Valley, Victoria",
    body: "Light-Medium",
    tannin: "Low",
    acidity: "High",
    sweetness: "Dry",
    smell: "Cherry",
    taste: "Silky",
    foodPairing: "Duck, salmon, light pasta",
    staffNotes: "Light and silky, great with lighter meats",
    availability: "3 shops"
  },
  {
    id: "nova-vita-sangiovese",
    name: "Nova Vita Sangiovese",
    type: "Red Wine",
    varietal: "Sangiovese",
    country: "Australia",
    region: "Adelaide Hills, South Australia",
    body: "Medium",
    tannin: "Medium",
    acidity: "High",
    sweetness: "Dry",
    smell: "Cherry",
    taste: "Bright",
    foodPairing: "Pizza, pasta, tomato-based dishes",
    staffNotes: "Bright and acidic, perfect with Italian food",
    availability: "3 shops"
  },
  {
    id: "aranleon-bles-tinto",
    name: "Aranleon Bles Tinto",
    type: "Red Wine",
    varietal: "Spanish blend",
    country: "Spain",
    region: "Valencia, Spain",
    body: "Medium-Full",
    tannin: "Medium",
    acidity: "Medium",
    sweetness: "Dry",
    smell: "Plum",
    taste: "Smooth",
    foodPairing: "Red meat, cheese, stews",
    staffNotes: "Smooth and approachable, crowd favorite",
    availability: "3 shops"
  },
  {
    id: "andeluna-1300-malbec",
    name: "Andeluna 1300 Malbec",
    type: "Red Wine",
    varietal: "Malbec",
    country: "Argentina",
    region: "Mendoza, Argentina",
    body: "Medium-Full",
    tannin: "High",
    acidity: "Medium",
    sweetness: "Dry",
    smell: "Blackberry",
    taste: "Plush",
    foodPairing: "Wagyu, steak, heavy pasta",
    staffNotes: "Full-bodied with dark fruit, great with red meat. High tannin - suggest protein-rich foods",
    availability: "3 shops"
  },
  {
    id: "terranoble-azara-carmenere",
    name: "TerraNoble Azara Carmenere",
    type: "Red Wine",
    varietal: "Carmenere",
    country: "Chile",
    region: "Chile",
    body: "Full",
    tannin: "High",
    acidity: "Medium-Low",
    sweetness: "Dry",
    smell: "Chocolate",
    taste: "Lush",
    foodPairing: "Red meat, game, spicy dishes",
    staffNotes: "Lush and full-bodied. High tannin - suggest protein-rich foods",
    availability: "3 shops"
  },
  {
    id: "andeluna-altitud-malbec",
    name: "Andeluna Altitud Malbec",
    type: "Red Wine",
    varietal: "Malbec",
    country: "Argentina",
    region: "Uco Valley, Argentina",
    body: "Full+",
    tannin: "High",
    acidity: "Medium-Low",
    sweetness: "Dry",
    smell: "Violet",
    taste: "Powerful",
    foodPairing: "Wagyu, lamb, rich stews",
    staffNotes: "Most powerful Malbec, premium selection. High tannin - suggest protein-rich foods",
    availability: "3 shops"
  },
  {
    id: "maxwell-spiced-mead",
    name: "Maxwell Spiced Mead",
    type: "Red Wine",
    varietal: "Mead",
    country: "Australia",
    region: "Clare Valley, South Australia",
    body: "Full",
    tannin: "Low",
    acidity: "Low",
    sweetness: "Sweet",
    smell: "Honey",
    taste: "Sweet",
    foodPairing: "Desserts, cheese, nuts",
    staffNotes: "Sweet dessert wine, perfect with desserts",
    availability: "3 shops"
  }
];

export const wineTypes = ["White Wine", "Rose", "Red Wine"];

export const wineRegions = [
  "Clare Valley, South Australia",
  "Marlborough, New Zealand",
  "Valencia, Spain",
  "Adelaide Hills, South Australia",
  "South Africa",
  "Margaret River, Western Australia",
  "Yarra Valley, Victoria",
  "Mendoza, Argentina",
  "Uco Valley, Argentina",
  "Chile"
];