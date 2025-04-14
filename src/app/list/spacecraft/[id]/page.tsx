'use client'
import spaceShipListJson from '../../../spaceships.json'
import { useParams } from "next/navigation"
import Image from 'next/image'
import Link from 'next/link'

interface spaceShipType {
  id: number,
  name: string,
  model: string,
  category: string,
  description: string,
  imageUrl: string
}

export default function Page() {
  const params = useParams()
  const id = Number(params.id)
  const spaceShip = spaceShipListJson.find((nav) => nav.id === id)

  if (!spaceShip) {
    return <p>Nenhuma nave encontrada com esse ID.</p>
  }

  // Asserção de tipo para garantir que 'spaceShip' será um tipo válido
  const validSpaceShip = spaceShip as spaceShipType;

  return (
    <>
      <h1 className="mainTitle">{validSpaceShip.name}</h1>
      <div className="containerViewShip">
        <Image 
          src={validSpaceShip.imageUrl}
          alt={validSpaceShip.name}
          width={768}
          height={432}
        />
        <p className="classShip">Classe: {validSpaceShip.category}</p>
        <p className="modelShip">Modelo: {validSpaceShip.model}</p>
        <p className="descriptionShip">{validSpaceShip.description}</p>
        <div className="buttonsNavShip">
          {validSpaceShip.id != 1 && (
          <Link href={`/list/spacecraft/${validSpaceShip.id-1}`}>
            <div className="cardContent">
              Anterior
            </div>
          </Link>
          )}

          <Link href={`/list/spacecraft`}>
            <div className="cardContent">
              Voltar para Espaçonaves
            </div>
          </Link>

          {validSpaceShip.id < spaceShipListJson.length && (
          <Link href={`/list/spacecraft/${validSpaceShip.id+1}`}>
            <div className="cardContent">
              Próximo
            </div>
          </Link>
          )}
        </div>
      </div>
    </>
  )
}
