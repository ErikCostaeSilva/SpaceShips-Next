import Link from 'next/link';
import listSpaceshipsJson from '../../spaceships.json'
export default function Page() {
  const categoriesList = listSpaceshipsJson.reduce((acumul:string[],nav)=>{
      if(!acumul.find(cat => cat === nav.category)){
        acumul.push(nav.category);
      }
      return acumul
  },[])
  
  return (
    <>
    <h1 className="mainTitle">Categorias</h1>
    <div className="cardsContainer">
    {categoriesList.map((category)=>(
        <Link key={category} href={`/list/categories/${category.replace(" ","_")}`}>
        <div className="cardContent" key={category}>
          {category}
        </div>
        </Link>
      ))}
    </div>
    </>
  )
}