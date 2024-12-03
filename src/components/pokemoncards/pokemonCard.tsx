import Image from "next/image";
import Link from "next/link";
import { IPokemonCard } from "../../interfaces/interfacePokemonCard";

interface IPokemonCardProps {
  card: IPokemonCard;
}

export default function PokemonCard({card}: IPokemonCardProps) {

  return (
    <li className="flex flex-col justify-center items-center">
      <div className="card-container">
        <Image
          fill
          src={card.imageUrlReg}
          alt={`Pokemon card for ${card.name}`}
          ></Image>
      </div>
      <Link
        href={`/shop/${card.id}`}
      >{card.name}</Link>
    </li>
  )
}