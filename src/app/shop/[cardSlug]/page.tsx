import Image from "next/image";
import { Suspense } from "react";
import { notFound } from 'next/navigation';
import { getCard } from "../../../../lib/http";
import classes from './page.module.scss';

interface IAttack {
  cost: string[],
  damage: number, 
  effect: string, 
  name: string
};

interface IWeakness {
  type: string, 
  value: string
}

export async function generateMetadata({params}: {params: Promise<{cardSlug: string}>}) {
  const card = await getCard((await params).cardSlug);

  if (!card) {
    notFound();
  }

  return {
    title: card.name, 
    description: `Pokemon card for ${card.name}.`
  }
}

export default async function CardPage({params}: {params: Promise<{cardSlug: string}>}) {
  const card = await getCard((await params).cardSlug);

  if (!card) {
    return <p>Loading...</p>; 
  }

  console.log(card);

  return (
    <main>
        <Suspense fallback={<p>Loading...</p>}>
          <h2 className="text-center">{card?.name}</h2>
          <div className={classes.cardContainer}>
            <Image
              fill
              src={card.imageUrlHD}
              alt={card.name}
            ></Image>
          </div>

          { card.description && 
            <p className="text-center mt-4">{card.description}</p>}

          <div className={classes.detail}>
            <h3>Type(s):</h3>
            {card.types.map((type: string) => (
              <p key={type}> {type}</p>
            ))}
          </div>

          <div className={classes.detail}>
            <h3>Attacks:</h3>
              {card.attacks.map((attack: IAttack, i: number) => (
                <div key={Math.random()}>
                  <p>Attack {i+1}: {attack.name}</p>
                  <p>Effect: {attack.effect}</p>
                  <p>Cost: {attack.cost.join(', ')}</p>
                  <p>Damage: {attack.damage}</p>
                </div>
              ))}
          </div>

          <div className={classes.detail}>
            <h3>Weaknesses:</h3>
            {card.weaknesses.map((weak: IWeakness) => (
              <div key={Math.random()}>
                <p>Type: {weak.type}</p>
                <p>Value: {weak.value}</p>
              </div>
            ))}
          </div>
        </Suspense>
    </main>
  )
}