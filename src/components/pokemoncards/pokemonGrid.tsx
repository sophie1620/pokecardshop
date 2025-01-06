"use client";
import { useEffect, useState, lazy } from "react";

import { getPokemon } from "../../lib/http";
import { IPokemonCard, IPokemonData } from "../../interfaces/interfacePokemonCard";

const PokemonCard = lazy(() => import("./pokemonCard")); // using lazy import for this component because we are awaiting for data to be returned before feeding it in as props

export default function PokemonGrid() {
  const [resData, setResData] = useState<IPokemonData | null>(null);

  useEffect(() => {
    async function getData () {
      const data = await getPokemon();
      setResData(data);
    }

    getData();
  }, []);

  return (
    <div className="w-full p-4">
      <h2>Available for purchase</h2>

        <ul className="flex flex-row justify-around flex-wrap gap-1">
          {resData?.cards.map((card: IPokemonCard) => (
            <PokemonCard card={card} key={card.id} />
          ))}
        </ul>

  </div>
  )
}