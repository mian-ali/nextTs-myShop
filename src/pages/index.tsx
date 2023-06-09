import type {InferGetStaticPropsType} from 'next'
 import getAllProduct from '../../framework/shopify/product/get-all-product'

export async function getStaticProps() {

  const products= await getAllProduct()

  return{

    props:{

      products
    },
    revalidate: 4* 60 * 60
  }
}
export default function Home({
  products
}:InferGetStaticPropsType<typeof getStaticProps>) {

  getAllProduct()
  return (
<div>
  <h1>{JSON.stringify(products)}</h1>
</div>
  )
}
