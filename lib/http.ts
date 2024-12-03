import axios from "axios";

const url: string = 'https://api.tcgdex.net/v2/en';

export async function getPokemon() {
  const data = axios.get(`${url}/sets/swsh3`)
    .then((res) => {

      // append image resolution and file type
      for (const item of res.data.cards) {
        const imageUrlHD: string = `${item.image}/high.webp`;
        const imageUrlReg: string = `${item.image}/low.webp`;
        
        item.imageUrlHD = imageUrlHD;
        item.imageUrlReg = imageUrlReg;
      }

      if (res.status !== 200) {
        throw new Error (`Failed to fetch data: ${res.status}`);
      }

      return res.data;
    })
    .catch ((error) => {
      console.error(error.message)
    })
    return data;
}

export async function getCard(id: string) {
  try {
    const res = await axios.get(`${url}/cards/${id}`)
      if(res.status !== 200) {
        throw new Error ('Failed to fetch card');
      }
    
      const imageUrlHD: string = `${res.data.image}/high.webp`;
      const imageUrlReg: string = `${res.data.image}/low.webp`;
      
      return {...res.data, imageUrlHD, imageUrlReg }
  } catch (error) {
      console.error(error)
  }
}