import Layout from './components/Layout'
import ProductsList from './components/ProductsList'

export default function App() {
  return (
    <>
      <Layout>{<ProductsList />}</Layout>
    </>
  )
}
