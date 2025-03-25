"use client"

import { RootState } from '@/store/store'
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const cartItems = useSelector((state: RootState) => state.cart.items)
  return (
    <div className=' bg-[#e8e8e8] w-full px-[30px] py-[10px] border-b-[1px] border-[#999] fixed z-99'>
        <div className='flex justify-between  items-center max-w-[1300px] mx-auto'>
            <Link href={'/'} className='flex gap-[10px] items-center'>
                <Image src={'/header_logo.webp'} alt='header logo' width={40} height={100} />
                <span className='text-[25px] font-[700]'>A-Store</span>
            </Link>
            <form> 
                <input type="text" />
            </form>
            <ul className='flex gap-[20px] items-center'>
                <li className='cursor-pointer'>All products</li>
                <Link href={'/liked'} className='flex gap-[5px] relative overflow-hidden items-center px-[25px] py-[5px] text-[15px] text-white bg-[#00b7ff] rounded-[5px] cursor-pointer'>
                    <Heart  className='w-[17px]'/> 
                    <span className='text-[17px]'>Favorites</span> 
                    <div className='absolute w-[full] px-[5px] rounded-bl-[5px] h-[20px] flex justify-center items-center bg-amber-300 top-0 right-0'>0</div>
                </Link>
                <Link href={'/cart'} className='flex gap-[5px] relative overflow-hidden items-center px-[25px] py-[5px] text-[15px] text-white bg-[#00b7ff] rounded-[5px] cursor-pointer'>
                    <ShoppingCart  className='w-[17px]'/> 
                    <span className='text-[17px]'>My bag</span> 
                    <div className='absolute w-[full] px-[5px] rounded-bl-[5px] h-[20px] flex justify-center items-center bg-amber-300 top-0 right-0'>{cartItems.length}</div>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header