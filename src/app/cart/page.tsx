"use client"

import { removeFromCart } from "@/reducers/cartSlice"
import { AppDispatch, RootState } from "@/store/store"
import Image from "next/image"
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
    <div className="max-w-[1000px] mx-auto px-[30px]  pt-[80px] min-h-[100vh]">
        <h1 className="text-center text-[30px] font-[600] mb-[20px]">Cart items</h1>
        <div className="flex gap-[20px]">
            <div className="w-[70%] ">
                {cartItems.map(item => (
                    <div key={item.id} className="p-[20px] flex gap-[20px] border-[1px] border-[#999] rounded-[6px] mb-[15px]">
                        <div className="min-w-[150px] max-x-[150px] flex justify-center" >
                            <Image src={item.image} alt={item.title} style={{objectFit: 'contain'}} width={100} height={100}/>
                        </div>
                        <div>
                            <h2 className="text-[22px] font-[600]">{item.title}</h2>
                            <p className="line-clamp-3 text-[15px] mb-[10px]">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <p className=" font-[600]">${item.price}</p>
                                <div onClick={() => handleDelete(item.id)} className="bg-[#888] text-white rounded-[3px] cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[30%] p-[20px] border-[1px] border-[#999] rounded-[6px]">
                {/* <div className="flex justify-between">
                    <h3 className="font-[400] mb-[3px]">Subtotal</h3>
                    <span>$2323</span>
                </div>
                <div className="flex justify-between">
                    <h3 className="font-[400] mb-[5px]">Shipping</h3>
                    <span>$23</span>
                </div> <hr className="my-[10px]"/> */}
                <div className="flex justify-between mb-[50px]">
                    <h3 className="font-[700]">Total</h3>
                    <span className="font-[700]">${total.toFixed(2)}</span>
                </div>
                <button className='p-[10px] w-full active:bg-[#5ed1ff] cursor-pointer text-[#fff] rounded-[5px] bg-[#00b7ff]'>Check out</button>
            </div>
        </div>
    </div>
  )
}

export default MyProducts


// "use client";

// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/redux/store";

// const Cart = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Savatcha</h1>
//       {cartItems.length === 0 ? (
//         <p>Savatcha bo‘sh</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="border p-2 my-2">
//             <h3>{item.name}</h3>
//             <p>${item.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;
