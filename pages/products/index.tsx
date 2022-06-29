import { GetStaticProps, GetStaticPropsContext } from 'next'

type ProductsProps = {
  products: any[]
}

const Products = ({ products }: ProductsProps) => {
  if (!products) return null;
    return (
        <div>
            {products.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (
  context: GetStaticPropsContext) => {
  console.log("Get Static props - server ");
  const data = await(await fetch(`http://localhost:3001/products`) ).json()
  if(!data){
    return{
      notFound:true
    }
  }
  return {
    props: {
      products:data
    }
  }
}

export default Products 