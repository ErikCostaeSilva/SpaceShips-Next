import { ReactNode } from "react"

interface LayoutList{
  children: ReactNode
}

export default function Layout({ children }:LayoutList) {
  return (
    <main className="mainFlex">
    {children}
    </main>
  )
}