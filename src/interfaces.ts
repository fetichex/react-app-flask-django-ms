import { ReactNode } from 'react'

export interface ChildrenType {
  children: JSX.Element | ReactNode
}

export interface Product {
  id: number
  title: string
  image: string | undefined
  likes: number
}
