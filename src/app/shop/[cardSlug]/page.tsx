import Image from "next/image";
import { Suspense } from "react";
import { notFound } from 'next/navigation';
import { getCard } from "../../../lib/http";
import classes from './page.module.scss';
import AddToCartBtn from "@/components/cart/addToCartBtn";
import BackButton from "@/components/backButton";

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

  const cost = Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(card.price);

  const loading = <div className="loading">
      <div>
        <p>Loading</p>
        <div className="loader"></div>
      </div>
    </div>
  
  if (!card) {
    return <p>{loading}</p>; 
  }

  return (
    <main>
      <BackButton />
      <Suspense fallback={loading}>
        <h2 className="text-center">{card?.name}</h2>
        <div className={classes.cardContainer}>
          <Image
            fill
            src={card.imageUrlHD}
            alt={card.name}
          ></Image>
        </div>

        <section className="md:w-3/5  flex flex-col items-start mx-auto">

          <div className="flex flex-row justify-end items-center gap-4 w-full">
            <p>Cost: {cost}</p>
            <AddToCartBtn item={card} />
          </div>

          {card.description && 
            <div>
              <h3>Description:</h3>
              <p className="my-4"> {card.description}</p>
            </div>
            }

          <div>
            <h3>Type(s):</h3>
            {card.types.map((type: string) => (
              <p className={classes.cardDetail} key={type}> {type}</p>
            ))}
          </div>

          <div>
            <h3>Attacks:</h3>
              {card.attacks.map((attack: IAttack, i: number) => (
                <div className={classes.cardDetail} key={Math.random()}>
                  <p>
                    <span>Attack {i+1}:</span> {attack.name}
                  </p>
                  <p>
                    <span>Cost:</span> {attack.cost.join(', ')}
                  </p>
                  <p>
                    <span>Damage:</span> {attack.damage}
                  </p>
                </div>
            ))}
          </div>

          <div>
            <h3>Weaknesses:</h3>
            {card.weaknesses.map((weak: IWeakness) => (
              <div className={classes.cardDetail} key={Math.random()}>
                <p>
                  <span>Type:</span> {weak.type}</p>
                <p>
                  <span>Value:</span> {weak.value}</p>
              </div>
            ))}
          </div>
        </section>
      </Suspense>
    </main>
  )
}