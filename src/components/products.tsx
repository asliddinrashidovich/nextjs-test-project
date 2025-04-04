import { ProductTypes } from '@/interface';
import axios from 'axios'
import ProductsClientSide from './products-client';

const getData = async () => {
  const {data} = await axios.get('https://67e38f432ae442db76d08ec2.mockapi.io/a-store-products');
  return data 
}

async function Products() {
    const data: ProductTypes[] = await getData();
    console.log(data)

  return (
    <div className="max-w-[1400px] mx-auto pt-[70px] ">
        <h1 className='text-[35px] font-[700] mb-[30px] pl-[40px]'>Shop Now</h1>
        <ProductsClientSide products={data}/>
    </div>
  )
}

export default Products