import Link from 'next/link';
import listSpaceshipsJson from '../../spaceships.json';
export default function Page() {
  return (
    <>
    <h1 className="mainTitle">Todas as Espaçonaves</h1>
    <div className="cardsContainer">
    {listSpaceshipsJson.map((nav)=>(
        <Link key={nav.id} href={`/list/spacecraft/${nav.id}`}>
        <div className="cardContent">
          {nav.name}
        </div>
        </Link>
      ))}
    </div>
    </>
  )
}