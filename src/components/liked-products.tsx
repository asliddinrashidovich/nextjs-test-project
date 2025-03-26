"use client"

import { ProductTypes } from '@/interface';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Image from 'next/image';
// import {  useState } from 'react';
import { addToCart } from '@/reducers/cartSlice';
import { useRouter } from 'next/navigation';
import { removeFromLiked } from '@/reducers/likedSlice';


function LikedProducts() {
    const dispatch = useDispatch<AppDispatch>()
    const likedItems = useSelector((state: RootState) => state.liked.items)
    const router = useRouter()
   
    // const [productsAll, setProductsAll] = useState(likedItems)
        
    function handleLike(product: number, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        
        dispatch(removeFromLiked(product))
    }
    
    function handleAdd(product: ProductTypes, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        console.log('likeee', product);
        dispatch(addToCart(product))
    }

  return (
    <div className='min-h-[95vh]'>
      <h2 className="text-start text-[30px]  pt-[80px] pl-[30px] font-[600] mb-[20px]">Liked Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px] px-[40px] ">
          {likedItems.map(item => (
              <div key={item.id} onClick={() => router.push(`products/${item.id}`)}  className='border-[1px] relative rounded-[5px] p-[20px] '>
                  <div className='h-[200px] w-full flex justify-center py-[20px] items-center mb-[10px]'>
                      <Image src={item.image} alt={item.title} width={130} height={100}/>
                      <button className='cursor-pointer absolute w-[full] px-[5px] rounded-bl-[5px] h-[20px] flex justify-center items-center top-4 right-2' onClick={(e) => handleLike(item.id, e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" className="text-[red] bg-[red]"/>
                        </svg>
                      </button>
                  </div>
                  <h4 className='text-[#9900ff] mb-[10px]'>{item.category}</h4>
                  <h2 className='font-[700] w-full mb-[7px] '>{item.title}</h2>
                  <p className='line-clamp-3 mb-[50px]'>{item.description}</p>
                  <div className='flex justify-between items-center left-0 right-0 px-[20px] absolute bottom-[20px]'>
                      <h4 className='text-[#555]'>${item.price}</h4>
                      <button onClick={(e) => handleAdd(item, e)} className='p-[5px] active:bg-[#5ed1ff] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Add to cart</button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default LikedProducts