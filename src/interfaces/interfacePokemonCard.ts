export interface IPokemonCard {
  id: number;
  name: string; 
  image: string;
  localId: number;
  imageUrlHD: string;
}

export interface IPokemonData {
  cards: IPokemonCard[];
}

export interface IPokemonCardData {
  attacks: [],
  category: string,
  description?: string,
  dexId: [],
  hp: number,
  id: string,
  illustrator: string, 
  image: string,
  imageUrlHD: string,
  legal: object,
  localId: number, 
  name: string,
  rarity: string, 
  set: object, 
  stage: string, 
  suffix: string,
  types: [],
  updated: string,
  variants: object,
  weakness:[],
  price: number
}