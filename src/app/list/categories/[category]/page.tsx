'use client'
import { useParams } from "next/navigation"
import listSpaceshipsJson from '../../../spaceships.json';
import Link from "next/link";

export default function Page(){
  const params = useParams();
  const rawCategory = String(params.category);
  const category = rawCategory.includes("_") ? rawCategory.replace("_", "") : rawCategory;

  const spaceShipsByCategory = listSpaceshipsJson.filter((nav) => nav.category === category);

  return (
    <>
      <h1 className="mainTitle">{category}</h1>
      <div className="cardsContainer">
        {spaceShipsByCategory.map((space) => (
          <Link key={space.id} href={`/list/spacecraft/${space.id}`}>
            <div className="cardContent">
              {space.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
