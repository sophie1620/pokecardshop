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
            sizes="88px, (min-width: 640) 146px, (min-width: 1024) 233px"
            ></Image>
        </div>
        <p className="text-center">{card.name}</p>
      </Link>
    </li>
  )
}