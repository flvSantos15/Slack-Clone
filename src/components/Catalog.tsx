'use client'

import { useSelector } from 'react-redux'

export default function Catalog() {
  // aqui tenho acesso ao que existe no store
  // const store = useStore()
  // no useStore vem muita informação que ñ preciso
  // por isso uso o useSelector
  const catalog = useSelector((state) => state)

  return <div>Catalog</div>
}
