"use client"

import { removeFromCart } from "@/reducers/cartSlice"
import { AppDispatch, RootState } from "@/store/store"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function MyProducts() {
    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    let total:number = 0;
    cartItems.forEach(i => {
        total += i.price
    })

    function handleDelete(id: number) {
        dispatch(removeFromCart(id))
    }
  return (
    <div className="max-w-[1000px] mx-auto px-[30px]  py-[80px] min-h-[100vh]">
        <h1 className="text-center text-[30px] font-[600] mb-[20px]">Cart items</h1>
        <Link href={'/'} className='py-[10px] px-[15px] bg-[#e8e8e8] cursor-pointer rounded-[5px] inline-block mb-[20px] '>Back to products</Link>
        {cartItems.length ? <div className="flex md:flex-row flex-col gap-[20px]">
            <div className="w-full md:w-[70%] ">
                {cartItems.map(item => (
                    <div key={item.id} className="p-[20px] flex md:flex-row flex-col gap-[20px] border-[1px] border-[#999] rounded-[6px] mb-[15px]">
                        <div className="min-w-[150px] max-x-[150px] flex justify-center" >
                            <Image src={item.image} alt={item.title} style={{objectFit: 'contain'}} width={100} height={100}/>
                        </div>
                        <div>
                            <h2 className="text-[22px] font-[600]">{item.title}</h2>
                            <p className="line-clamp-3 text-[15px] mb-[10px]">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <p className=" font-[600]">${item.price}</p>
                                <div onClick={() => handleDelete(item.id)} className="bg-[#888] text-white rounded-[3px] cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                        <path strokeLinecap="round"  strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full md:w-[30%] p-[20px] border-[1px] border-[#999] rounded-[6px]">
                <div className="flex justify-between mb-[50px]">
                    <h3 className="font-[700]">Total</h3>
                    <span className="font-[700]">{total.toFixed(2)}</span>
                </div>
                <button className='p-[10px] w-full active:bg-[#5ed1ff] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Check out</button>
            </div>
        </div>: ''}
        {!cartItems.length && <div className="bg-[#999] w-[400px] mx-auto rounded-[30px] p-[20px]">
                <h1 className="text-center text-[25px]" >You have not take product yet </h1>
                <h1 className="text-[100px] text-center">☹️</h1>
            </div>}
    </div>
  )
}

export default MyProducts
