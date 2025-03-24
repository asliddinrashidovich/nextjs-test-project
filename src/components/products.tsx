import { ProductTypes } from '@/interface';
import axios from 'axios'
import Image from 'next/image';

const getData = async () => {
  const {data} = await axios.get('https://fakestoreapi.com/products');
  return data 
}

async function Products() {
    const data: ProductTypes[] = await getData();
    console.log(data)
  return (
    <div className="max-w-[1300px] mx-auto mt-[30px] px-[30px]">
        <h1 className='text-[35px] font-[700] mb-[30px]'>Shop Now</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px]">
            {data.map(item => (
                <div key={item.id} className='border-[1px] relative rounded-[5px] p-[20px]'>
                    <div className='h-[200px] w-full flex justify-center py-[20px] items-center mb-[10px]'>
                        <Image src={item.image} alt={item.title} width={130} height={100}/>
                        <div className='cursor-pointer absolute w-[full] px-[5px] rounded-bl-[5px] h-[20px] flex justify-center items-center top-4 right-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                        </div>
                    </div>
                    <h4 className='text-[#9900ff] mb-[10px]'>{item.category}</h4>
                    <h2 className='font-[700] w-full mb-[7px] '>{item.title}</h2>
                    <p className='line-clamp-3 mb-[50px]'>{item.description}</p>
                    <div className='flex justify-between items-center left-0 right-0 px-[20px] absolute bottom-[20px]'>
                        <h4 className='text-[#555]'>${item.price}</h4>
                        <button className='p-[5px] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products