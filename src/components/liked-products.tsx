"use client"

import { ProductTypes } from '@/interface';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { addToCart } from '@/reducers/cartSlice';
import { useRouter } from 'next/navigation';
import { removeFromLiked } from '@/reducers/likedSlice';
import { useEffect, useState } from 'react';
import Link from 'next/link';


function LikedProducts() {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const likedItems = useSelector((state: RootState) => state.liked.items)
    const productFilterName =  useSelector((state: RootState) => state.products.items)
    const [productsAllLiked, setProductsAllLiked] = useState(likedItems)
        
    function handleLike(product: number, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        dispatch(removeFromLiked(product))
    }

    useEffect(() => {
      setProductsAllLiked((prev) =>
            prev?.map((productItem) =>
                productItem.category.slice(0, 3).includes(productFilterName)
                    ? { ...productItem, filter: true }
                    : { ...productItem, filter: false }
            )
        );
        setProductsAllLiked(likedItems)
    }, [productFilterName, likedItems]); 
    
    function handleAdd(product: ProductTypes, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        dispatch(addToCart(product))
    }

  return (
    <div className='min-h-[95vh]'>
      <h2 className="text-start text-[30px]  pt-[80px] pl-[30px] font-[600] mb-[10px]">Liked Products</h2>
      <Link href={'/'} className='py-[10px] px-[15px] bg-[#e8e8e8] cursor-pointer rounded-[5px] inline-block mb-[20px] ml-[30px]'>Back to products</Link>
      {likedItems.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px] px-[40px] ">
          {productsAllLiked.map(item =>  (
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
                    <div className='flex gap-[6px]'>
                        <button onClick={(e) => handleLike(item.id, e)} className="bg-[#888] p-[5px] text-white rounded-[5px]  cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round"  strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button onClick={(e) => handleAdd(item, e)} className='p-[5px] active:bg-[#5ed1ff] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Add to cart</button>
                    </div>
                </div>
              </div>
          ))}
      </div> : ''}
      {!productsAllLiked.length && <div className="bg-[#999] w-[400px] mx-auto rounded-[30px] p-[20px]">
        <h1 className="text-center text-[25px]" >There is not any liked products</h1>
        <h1 className="text-[100px] text-center">☹️</h1>
      </div>}
    </div>
  )
}

export default LikedProducts