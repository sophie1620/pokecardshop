"use client";
import { useEffect, useState, lazy, useRef} from "react";

import { getPokemon } from "../../lib/http";
import { IPokemonCard, IPokemonData } from "../../interfaces/interfacePokemonCard";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/all";

const PokemonCard = lazy(() => import("./pokemonCard")); // using lazy import for this component because we are awaiting for data to be returned before feeding it in as props

gsap.registerPlugin(Flip, useGSAP);


export default function PokemonGrid() {
  const [resData, setResData] = useState<IPokemonData | null>(null);
  const gridContainer = useRef<HTMLElement | any>();

  useEffect(() => {
    async function getData () {
      const data = await getPokemon();
      setResData(data);
    }

    getData();
  }, []);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    gsap.from(cards, {opacity: 0.3, stagger: {amount: 0.5, grid: 'auto'}});
        gsap.to(cards, {opacity: 1});
    const state = Flip.getState(".card", {simple: true});

    Flip.from(state, {
      ease: "power2.in",
      stagger: 0.1, 
      yPercent: -1
    })
    .to(state, {yPercent: 0})

  }, {scope: gridContainer});

  return (
    <div className="w-full p-4">
      <h2>Available for purchase</h2>

        <ul className="flex flex-row justify-around flex-wrap gap-1 mt-8" ref={gridContainer}>
          {resData?.cards.map((card: IPokemonCard) => (
            <div className="card" key={card.id}>
            <PokemonCard card={card} key={card.id} />
            </div>
          ))}
        </ul>

  </div>
  )
}