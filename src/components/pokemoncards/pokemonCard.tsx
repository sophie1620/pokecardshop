import Image from "next/image";
import Link from "next/link";
import { IPokemonCard } from "../../interfaces/interfacePokemonCard";
import classes from './pokemonCard.module.scss';

interface IPokemonCardProps {
  card: IPokemonCard;
}

export default function PokemonCard({card}: IPokemonCardProps) {

  return (
    <li className={`flex flex-col justify-center items-center ${classes.card}`}>
      <Link
        href={`/shop/${card.id}`}
      >
        <div className={classes.cardContainer}>
          <Image
            fill
            src={card.imageUrlReg}
            alt={`Pokemon card for ${card.name}`}
            ></Image>
        </div>
        <p className="text-center">{card.name}</p>
      </Link>
    </li>
  )
}