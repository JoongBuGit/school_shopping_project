import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function Home() {
  // 변수에 /utils/data 데이터를 넣는것 같다.
  const { products } = data

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {/* {products.map((product) => (
        <div key={product.di}>
          {product.name}-{product.price}-{product.rating}
        </div>
      ))} */}

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
