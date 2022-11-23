import create from 'zustand'
import { Product } from './interfaces'

interface ProductState {
  products: Product[]
  addProduct: (p: Product) => void
  deleteProduct: (id: number) => void
}

const useStore = create<ProductState>()(set => ({
  products: [],
  addProduct: p => set(state => ({ products: [...state.products, p] })),
  deleteProduct: id =>
    set(state => ({ products: state.products.filter(p => p.id !== id) })),
}))

export default useStore
