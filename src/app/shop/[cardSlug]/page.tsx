"use client";
import Image from "next/image";

import { useState, useEffect, use, Suspense } from "react";
import { notFound } from 'next/navigation';

import { getCard } from "../../../../lib/http";
import { IPokeCardData } from "@/interfaces/interfacePokemonCard";

export default function CardPage({params}: {params: Promise<{cardSlug: string}>}) {
  const { cardSlug } = use(params);

  const [cardData, setCardData] = useState<IPokeCardData | null>();

  useEffect(() => {
    async function getCardData() {
      const data = await getCard(cardSlug);

      if (data) {
        setCardData(data);
      } else {
        console.error('No card data found');
        notFound();
      }
    }
    getCardData();

  }, [cardSlug]);

  if (!cardData) {
    return <p>Loading...</p>; 
  }

  console.log(cardData);

  return (
    <main>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <p className="text-center">{cardData?.name}</p>
          <div className="card-container m-auto">
            <Image
              fill
              src={cardData.imageUrlHD}
              alt={cardData.name}
            ></Image>
          </div>

          <div className="flex flex-col items-center mt-8">
            { cardData.description && 
            <p className="text-center mt-4">{cardData.description}</p>}

            <p>Type(s):
            { cardData.types.map((type) => (
              <span key={type}> {type}</span>
            ))}</p>
          </div>

          <div>
            <p>Attacks:</p>
          </div>

          <div>
            <p>Weaknesses:</p>
          </div>


        </Suspense>
      </div>
    </main>
  )
}