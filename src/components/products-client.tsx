"use client"

import { ProductTypes } from '@/interface'
import { addToCart } from '@/reducers/cartSlice'
import { addToLiked } from '@/reducers/likedSlice'
import { AppDispatch, RootState } from '@/store/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function ProductsClientSide({products}: {products: ProductTypes[]}) {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const productFilterName =  useSelector((state: RootState) => state.products.items)

    console.log(productFilterName)
    
    const [productsAll, setProductsAll] = useState(products)

    useEffect(() => {
        const updatedProducts = productsAll.map((product: ProductTypes) => ({
            ...product,
            liked: false, 
            filter: true,
        }));
        setProductsAll(updatedProducts);
    }, [products])

    useEffect(() => {
        setProductsAll(prev =>
            prev.map(productItem =>
              productItem.category.includes(productFilterName)  ? { ...productItem, filter: true } :  { ...productItem, filter: false }
            )
        );
    }, [productFilterName])
    
    
    function handleLike(product: ProductTypes, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        dispatch(addToLiked(product))

        setProductsAll(prev =>
            prev.map(productItem =>
              productItem.id === product.id ? { ...productItem, liked: !productItem.liked } : productItem
            )
        );
    }

    function handleAdd(product: ProductTypes, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        dispatch(addToCart(product))
    }
    
    function handleDelete(id: number, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        
        setProductsAll(prev =>
            prev.filter(productItem =>
                productItem.id != id
        ))
    }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px] px-[40px]">
    {productsAll.map(item => item.filter && (
        <div key={item.id} onClick={() => router.push(`products/${item.id}`)}  className='border-[1px] relative rounded-[5px] p-[20px] '>
            <div className='h-[200px] w-full flex justify-center py-[20px] items-center mb-[10px]'>
                <Image src={item.image} alt={item.title} width={130} height={100}/>
                <button className='cursor-pointer absolute w-[full] px-[5px] rounded-bl-[5px] h-[20px] flex justify-center items-center top-4 right-2' onClick={(e) => handleLike(item, e)}>
                    {!item.liked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>}
                    {item.liked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" className="text-[red] bg-[red]"/>
                    </svg>}
                </button>
            </div>
            <h4 className='text-[#9900ff] mb-[10px]'>{item.category}</h4>
            <h2 className='font-[700] w-full mb-[7px] '>{item.title}</h2>
            <p className='line-clamp-3 mb-[50px]'>{item.description}</p>
            <div className='flex justify-between items-center left-0 right-0 px-[20px] absolute bottom-[20px]'>
                <h4 className='text-[#555]'>${item.price}</h4>
                <div className='flex gap-[6px]'>
                    <button onClick={(e) => handleDelete(item.id, e)} className="bg-[#888] p-[5px] text-white rounded-[5px]  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                            <path strokeLinecap="round"  strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button onClick={(e) => handleAdd(item, e)} className='p-[5px] active:bg-[#5ed1ff] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Add to cart</button>
                </div>
            </div>
        </div>
    ))}
    </div>
  )
}

export default ProductsClientSide