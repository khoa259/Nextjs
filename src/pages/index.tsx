import useProducts from '@/hooks/use-product';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'


const Home = () => {
  const { data: products, error, create, remove } = useProducts();
  if (!products) return <div>Loading...</div>;
  // if (error) return <div>error</div>;

  const {register , handleSubmit} = useForm()
  const onSubmit = (data:any) => {
    create(data)
    
  }
  return (
      <div className={styles.container}>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')}  placeholder='tên sp'/>
            <button>Thêm</button>
        </form>

          {products.map((product:any, index) => (
              <div key={index}>
                  {product.name} <button onClick={() => {if(window.confirm("bạn có muốn xóa không")) {remove(product.id)}}}>Delete</button>
              </div>
          ))}
      </div>
       
  );
}
export default Home
